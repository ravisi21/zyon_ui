import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils/formatter";
import HeaderScriptComponent from "./HeaderScriptComponent";
import { Avatar, Dropdown, Button, Menu, Drawer } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import * as userStore from "../../store/userStore";
import * as headerScriptsStore from "../../store/headerScriptsStore";
import * as marginsStore from "../../store/marginsStore";
import eventBus, { EVENT_TYPES } from "../../utils/eventBus";
import { logoutAccount, signout, sync } from "../../api/apis";
import { showErrorToast } from "../../utils/utils";
import { formatDateTimeDDMMYYHHmm } from "../../utils/formatter";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(() => userStore.userStore.user);
  const [headerScripts, setHeaderScripts] = useState(() =>
    headerScriptsStore.getHeaderScripts(),
  );
  const [margin, setMargin] = useState(() => marginsStore.getMargins());
  const [accountSelected, setAccountSelected] = useState(
    () =>
      userStore.userStore.accounts.find(
        (acc) => acc.id === userStore.userStore.accountId,
      )?.name || "Select Account",
  );
  const [allowAccountLogout, setAllowAccountLogout] = useState(
    () => userStore.userStore.allowAccountLogout,
  );
  const [accountLogoutTime, setAccountLogoutTime] = useState(
    () => userStore.userStore.accountLogoutTime,
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function handleUserChange() {
      setUser(userStore.userStore.user);
    }
    function handleHeaderScriptsChange() {
      setHeaderScripts(headerScriptsStore.getHeaderScripts());
    }
    function handleMarginChange() {
      setMargin(marginsStore.getMargins());
    }
    function handleAccountsChange() {
      setAccountSelected(
        userStore.userStore.accounts.find(
          (acc) => acc.id === userStore.userStore.accountId,
        )?.name || "Select Account",
      );
    }
    function handleAllowAccountLogoutChange() {
      setAllowAccountLogout(userStore.userStore.allowAccountLogout);
    }
    function handleAccountLogoutTimeChange() {
      setAccountLogoutTime(userStore.userStore.accountLogoutTime);
    }

    const unsubscribeUser = eventBus.on(
      EVENT_TYPES.USER_UPDATE,
      handleUserChange,
    );
    const unsubscribeAccounts = eventBus.on(
      EVENT_TYPES.USER_ACCOUNTS_UPDATE,
      handleAccountsChange,
    );
    const unsubscribeAccountId = eventBus.on(
      EVENT_TYPES.USER_ACCOUNT_ID_UPDATE,
      handleAccountsChange,
    );
    const unsubscribeHeaderScripts = eventBus.on(
      EVENT_TYPES.HEADER_SCRIPTS_UPDATE,
      handleHeaderScriptsChange,
    );
    const unsubscribeMargin = eventBus.on(
      EVENT_TYPES.MARGINS_UPDATE,
      handleMarginChange,
    );
    const unsubscribeAllowAccountLogout = eventBus.on(
      EVENT_TYPES.ALLOW_ACCOUNT_LOGOUT_UPDATE,
      handleAllowAccountLogoutChange,
    );
    const unsubscribeAccountLogoutTime = eventBus.on(
      EVENT_TYPES.USER_UPDATE,
      handleAccountLogoutTimeChange,
    );
    setUser(userStore.userStore.user);
    setHeaderScripts(headerScriptsStore.getHeaderScripts());
    setMargin(marginsStore.getMargins());
    handleAccountsChange();
    handleAllowAccountLogoutChange();
    handleAccountLogoutTimeChange();
    return () => {
      if (typeof unsubscribeUser === "function") unsubscribeUser();
      if (typeof unsubscribeAccounts === "function") unsubscribeAccounts();
      if (typeof unsubscribeAccountId === "function") unsubscribeAccountId();
      if (typeof unsubscribeHeaderScripts === "function")
        unsubscribeHeaderScripts();
      if (typeof unsubscribeMargin === "function") unsubscribeMargin();
      if (typeof unsubscribeAllowAccountLogout === "function")
        unsubscribeAllowAccountLogout();
      if (typeof unsubscribeAccountLogoutTime === "function")
        unsubscribeAccountLogoutTime();
    };
  }, []);

  const isSignedIn = user && user?.userId;

  const handleMenuClick = async ({ key }) => {
    switch (key) {
      case "logoutAccount":
        try {
          await logoutAccount();
        } catch (error) {
          showErrorToast("Could not logout account");
        }
        break;
      case "logout":
        try {
          await signout();
          await sync();
        } catch (error) {
          showErrorToast("Could not sign out");
        }
        break;
      default:
    }
  };

  const menu = isSignedIn && (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="welcome"
        disabled
        style={{
          cursor: "default",
          fontWeight: "bold",
          color: "#555",
          background: "#f6f6f6",
        }}
      >
        Hi, {user.name || user.userName || "User"}
      </Menu.Item>
      <Menu.Divider />
      {allowAccountLogout && (
        <>
          <Menu.Item key="logoutAccount" icon={<LogoutOutlined />} danger>
            Logout Account
          </Menu.Item>
          {accountLogoutTime && (
            <Menu.Item
              key="logoutAccountTime"
              disabled
              style={{
                fontSize: 12,
                color: "#888",
                background: "inherit",
                cursor: "default",
              }}
            >
              Valid till: {formatDateTimeDDMMYYHHmm(accountLogoutTime)}
            </Menu.Item>
          )}
        </>
      )}
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Drawer
        title={null}
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
        closeIcon={false}
        className="md:hidden !bg-neutral-800 p-4 !text-neutral-200"
        styles={{ body: { padding: 0 } }}
      >
        <div>
          <div className="flex items-center justify-start gap-2">
            <div>
              <Avatar
                size={40}
                className="bg-price-green"
                icon={<UserOutlined />}
                src={
                  user?.avatarBlobId
                    ? `https://zyontrader.com/api/img/${user?.avatarBlobId}`
                    : undefined
                }
                shape="circle"
              />
            </div>
            <div className="text-lg font-bold">
              Hi, {user?.name || user?.userName || "User"}
            </div>
          </div>
          <div
            className="font-semibold text-base mt-6"
            onClick={() => {
              setDrawerOpen(false);
              userStore.setShowAccountSelectionPopup(true);
            }}
          >
            <span className="flex items-center text-price-green">
              <span>{accountSelected}</span>
              <span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-1"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 text-base mt-1">
            <div className="font-medium text-sm">Margin: </div>
            <div className="font-semibold">
              {formatPrice(margin?.marginAvailable)}
            </div>
          </div>
          <div className="border-b border-neutral-400 my-2"></div>
          <div>
            <div
              className="pb-2 font-semibold text-base text-price-red cursor-pointer"
              onClick={async () => {
                try {
                  await signout();
                  await sync();
                  setDrawerOpen(false);
                } catch (error) {
                  showErrorToast("Could not sign out");
                }
              }}
            >
              Sign Out
            </div>
            {allowAccountLogout && (
              <>
                <div
                  className="pb-2 font-semibold text-base text-price-red cursor-pointer"
                  onClick={async () => {
                    try {
                      await logoutAccount();
                      setDrawerOpen(false);
                    } catch (error) {
                      showErrorToast("Could not logout account");
                    }
                  }}
                >
                  Logout Account
                </div>
                {accountLogoutTime && (
                  <div className="text-xs text-neutral-400 mb-2 ml-1">
                    Valid till: {formatDateTimeDDMMYYHHmm(accountLogoutTime)}
                  </div>
                )}
              </>
            )}
            <div className="flex flex-col gap-4 mt-6">
              <Link to="/about-us" className="text-white hover:text-green-400 font-semibold transition" onClick={() => setDrawerOpen(false)}>About Us</Link>
              <Link to="/contact-us" className="text-white hover:text-green-400 font-semibold transition" onClick={() => setDrawerOpen(false)}>Contact Us</Link>
            </div>
          </div>
        </div>
      </Drawer>
      <div className="sticky top-0 z-50 flex items-center justify-between px-2 py-0 pt-2 md:py-2 shadow-md font-sans bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
        {/* Left: Logo and account selector */}
        <div className="flex items-center">
          {/* Menu icon for mobile */}
          {isSignedIn && (
            <button
              className="block md:hidden mr-1 p-1 focus:outline-none text-white hover:text-green-400 transition"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          )}

          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center focus:outline-none"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo_icon.svg`}
              alt="Logo"
              className="w-12 h-12 md:h-16 md:w-16"
            />
          </button>
          <div className="hidden md:flex items-center gap-6 ml-6">
            <Link to="/about-us" className="text-white hover:text-green-400 font-semibold transition">About Us</Link>
            <Link to="/contact-us" className="text-white hover:text-green-400 font-semibold transition">Contact Us</Link>
          </div>
          <button
            className="hidden md:block items-center text-green-400 font-bold py-1 rounded focus:outline-none hover:text-white transition"
            onClick={() => userStore.setShowAccountSelectionPopup(true)}
          >
            <span className="flex items-center">
              <span>{accountSelected}</span>
              <span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-1"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
        {/* Center: Market indices scrollable row */}
        <div className="header-scripts-container flex flex-1 gap-5 items-center justify-end md:justify-center">
          {headerScripts &&
            headerScripts.map((scriptId) => (
              <HeaderScriptComponent key={scriptId} scriptId={scriptId} />
            ))}
        </div>
        {/* Right: Margin info and user widget */}
        <div className="flex items-center gap-0 md:gap-2 text-right">
          {isSignedIn && (
            <div className="hidden md:block">
              <div className="text-gray-200 text-xs">Margin</div>
              <div className="text-white font-semibold text-md">
                {formatPrice(margin?.marginAvailable)}
              </div>
            </div>
          )}
          {/* User sign in widget */}
          {isSignedIn ? (
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={["click"]}
              className="hidden mr-4 md:block"
            >
              <Avatar
                style={{ backgroundColor: "#10b981", cursor: "pointer" }}
                icon={<UserOutlined />}
                src={
                  user.avatarBlobId
                    ? `https://zyontrader.com/api/img/${user.avatarBlobId}`
                    : undefined
                }
                shape="square"
              />
            </Dropdown>
          ) : (
            <Button
              type="primary"
              icon={<LoginOutlined />}
              onClick={() => userStore.setShowUserLogin(true)}
              className="bg-green-500 border-none text-white font-semibold hover:bg-green-600 hover:text-white transition"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
