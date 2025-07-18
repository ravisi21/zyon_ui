import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../utils/formatter';
import HeaderScriptComponent from './HeaderScriptComponent';
import * as userStore from '../../store/userStore';
import * as headerScriptsStore from '../../store/headerScriptsStore';
import * as marginsStore from '../../store/marginsStore';
import eventBus, { EVENT_TYPES } from '../../utils/eventBus';
import { Avatar, Dropdown, Drawer, Button, Menu } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { logoutAccount } from '../../api/apis';
import { showErrorToast } from '../../utils/utils';
import { formatDateTimeDDMMYYHHmm } from '../../utils/formatter';

const Header = () => {
  const [user, setUser] = useState(() => userStore.userStore.user);
  const [headerScripts, setHeaderScripts] = useState(() => headerScriptsStore.getHeaderScripts());
  const [margin, setMargin] = useState(() => marginsStore.getMargins());
  const [accountSelected, setAccountSelected] = useState(() => userStore.userStore.accounts.find(acc => acc.id === userStore.userStore.accountId)?.name || 'Select Account');
  const [allowAccountLogout, setAllowAccountLogout] = useState(() => userStore.userStore.allowAccountLogout);
  const [accountLogoutTime, setAccountLogoutTime] = useState(() => userStore.userStore.accountLogoutTime);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function handleUserChange() { setUser(userStore.userStore.user); }
    function handleHeaderScriptsChange() { setHeaderScripts(headerScriptsStore.getHeaderScripts()); }
    function handleMarginChange() { setMargin(marginsStore.getMargins()); }
    function handleAccountsChange() {
      setAccountSelected(userStore.userStore.accounts.find(acc => acc.id === userStore.userStore.accountId)?.name || 'Select Account');
    }
    function handleAllowAccountLogoutChange() { setAllowAccountLogout(userStore.userStore.allowAccountLogout); }
    function handleAccountLogoutTimeChange() { setAccountLogoutTime(userStore.userStore.accountLogoutTime); }

    const unsubscribeUser = eventBus.on(EVENT_TYPES.USER_UPDATE, handleUserChange);
    const unsubscribeAccounts = eventBus.on(EVENT_TYPES.USER_ACCOUNTS_UPDATE, handleAccountsChange);
    const unsubscribeAccountId = eventBus.on(EVENT_TYPES.USER_ACCOUNT_ID_UPDATE, handleAccountsChange);
    const unsubscribeHeaderScripts = eventBus.on(EVENT_TYPES.HEADER_SCRIPTS_UPDATE, handleHeaderScriptsChange);
    const unsubscribeMargin = eventBus.on(EVENT_TYPES.MARGINS_UPDATE, handleMarginChange);
    const unsubscribeAllowAccountLogout = eventBus.on(EVENT_TYPES.ALLOW_ACCOUNT_LOGOUT_UPDATE, handleAllowAccountLogoutChange);
    const unsubscribeAccountLogoutTime = eventBus.on(EVENT_TYPES.USER_UPDATE, handleAccountLogoutTimeChange);
    return () => {
      if (typeof unsubscribeUser === 'function') unsubscribeUser();
      if (typeof unsubscribeAccounts === 'function') unsubscribeAccounts();
      if (typeof unsubscribeAccountId === 'function') unsubscribeAccountId();
      if (typeof unsubscribeHeaderScripts === 'function') unsubscribeHeaderScripts();
      if (typeof unsubscribeMargin === 'function') unsubscribeMargin();
      if (typeof unsubscribeAllowAccountLogout === 'function') unsubscribeAllowAccountLogout();
      if (typeof unsubscribeAccountLogoutTime === 'function') unsubscribeAccountLogoutTime();
    };
  }, []);

  const isSignedIn = user && user?.userId;

  const handleMenuClick = async ({ key }) => {
    switch (key) {
      case 'logoutAccount':
        try {
          await logoutAccount();
        } catch (error) {
          showErrorToast("Could not logout account");
        }
        break;
      case 'logout':
        // Handle sign out
        console.log('Sign Out clicked');
        break;
      default:
        console.log('Click not handled: ' + key);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="welcome" disabled style={{ cursor: 'default', fontWeight: 'bold', color: '#555', background: '#f6f6f6' }}>
        Hi, {user?.name || user?.userName || 'User'}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile" icon={<UserOutlined />}>Profile</Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
      <Menu.Divider />
      {allowAccountLogout && (
        <>
          <Menu.Item key="logoutAccount" icon={<LogoutOutlined />} danger>Logout Account</Menu.Item>
          {accountLogoutTime && (
            <Menu.Item key="logoutAccountTime" disabled style={{ fontSize: 12, color: '#888' }}>
              Valid till: {formatDateTimeDDMMYYHHmm(accountLogoutTime)}
            </Menu.Item>
          )}
        </>
      )}
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>Sign Out</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Drawer
        title={null}
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={260}
        className="md:hidden !bg-neutral-800 p-4 !text-neutral-200"
        bodyStyle={{ padding: 0 }}
      >
        <div className="space-y-4">
          <div className='flex items-center gap-2'>
            <Avatar
              size={40}
              icon={<UserOutlined />}
              src={user?.avatarBlobId ? `https://zyontrader.com/api/img/${user.avatarBlobId}` : undefined}
              className="bg-price-green"
            />
            <div className='text-lg font-bold'>Hi, {user?.name || user?.userName || 'User'}</div>
          </div>
          <div
            className="text-base font-semibold text-price-green"
            onClick={() => {
              setDrawerOpen(false);
              userStore.setShowAccountSelectionPopup(true);
            }}>
            {accountSelected}
          </div>
          <div className="text-sm">Margin: {formatPrice(margin?.marginAvailable)}</div>
          <hr className="border-neutral-400" />
          <div className="space-y-2">
            <div onClick={() => console.log('Sign Out clicked')} className="cursor-pointer text-red-500 font-semibold">Sign Out</div>
            {allowAccountLogout && (
              <>
                <div
                  onClick={async () => {
                    try {
                      await logoutAccount();
                      setDrawerOpen(false);
                    } catch {
                      showErrorToast("Could not logout account");
                    }
                  }}
                  className="cursor-pointer text-red-500 font-semibold"
                >
                  Logout Account
                </div>
                {accountLogoutTime && (
                  <div className="text-xs text-neutral-400">Valid till: {formatDateTimeDDMMYYHHmm(accountLogoutTime)}</div>
                )}
              </>
            )}
          </div>
        </div>
      </Drawer>

      <header className="w-full bg-dark-bg text-white px-2 py-2 shadow-md flex items-center justify-between font-family-roboto">
        <div className="flex items-center gap-3">
          {isSignedIn && (
            <button onClick={() => setDrawerOpen(true)} className="md:hidden text-white">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          )}
          <img src={`${process.env.PUBLIC_URL}/logo_icon.svg`} alt="Logo" className="w-10 h-10 md:w-14 md:h-14" />
          <button
            onClick={() => userStore.setShowAccountSelectionPopup(true)}
            className="hidden md:flex text-logo-green font-bold"
          >
            <span className="flex items-center">
              {accountSelected}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="ml-1">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex-1 flex justify-end md:justify-center items-center overflow-x-auto gap-4 px-2 md:px-8 hide-scrollbar">
          {headerScripts?.map(scriptId => (
            <HeaderScriptComponent key={scriptId} scriptId={scriptId} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {isSignedIn && (
            <div className="hidden md:block text-right">
              <div className="text-gray-400 text-xs">Margin</div>
              <div className="text-neutral-400 font-semibold text-md">{formatPrice(margin?.marginAvailable)}</div>
            </div>
          )}
          {isSignedIn ? (
            <Dropdown overlay={menu} placement="bottomRight" className="hidden md:block">
              <Avatar
                style={{ backgroundColor: '#1890ff', cursor: 'pointer' }}
                icon={<UserOutlined />}
                src={user.avatarBlobId ? `https://zyontrader.com/api/img/${user.avatarBlobId}` : undefined}
              />
            </Dropdown>
          ) : (
            <Button type="primary" icon={<LoginOutlined />} onClick={() => userStore.setShowUserLogin(true)}>
              Sign In
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;