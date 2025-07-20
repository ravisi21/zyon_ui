import React, { useEffect, useState, useRef } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import MobileContent from './MobileContent';
import TraderPopupComponent from './Popups/TraderPopupComponent';
import { Splitter } from 'antd';
import { sync } from '../api/apis';
// eslint-disable-next-line no-unused-vars
import websocketService from '../api/websocket';
import eventBus, { EVENT_TYPES } from '../utils/eventBus';
import * as userStore from '../store/userStore';
import FloatingBottomLeftPanel from './Common/FloatingBottomLeftPanel';
import { getSidebarLeftVisible, setIsMobile } from '../store/uiStore';
import OrderStatusListWidget from './Orders/OrderStatusListWidget';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobileState] = React.useState(() => window.innerWidth < breakpoint);
  setIsMobile(window.innerWidth < breakpoint);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < breakpoint;
      setIsMobileState(mobile);
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    // Set initial state
    setIsMobile(window.innerWidth < breakpoint);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

const TraderContent = () => {
  const [loading, setLoading] = useState(true);
  const [initialSyncCompleted, setInitialSyncCompleted] = useState(false);
  const [accountId, setAccountId] = useState(userStore.userStore.accountId);
  const [user, setUser] = useState(userStore.userStore.user);
  const [showUserLogin, setShowUserLogin] = useState(userStore.userStore.showUserLogin);
  const [showUserOnboarding, setShowUserOnboarding] = useState(userStore.userStore.showUserOnboarding);
  const [showUserConfirmation, setShowUserConfirmation] = useState(userStore.userStore.showUserConfirmation);
  const [showAccountAddition, setShowAccountAddition] = useState(userStore.userStore.showAccountAddition);
  const [showHomeUserLogin, setShowHomeUserLogin] = useState(userStore.userStore.showHomeUserLogin);
  const [showHomeUserSignup, setShowHomeUserSignup] = useState(userStore.userStore.showHomeUserSignup);
  const selectedAccountIdRef = useRef(accountId);
  const [activeTab, setActiveTab] = useState('Positions');
  const [sidebarVisible, setSidebarVisible] = useState(getSidebarLeftVisible());
  const isMobile = useIsMobile();

  // On mount, check for accountId in URL and set it if present
  useEffect(() => {
    const url = new URL(window.location.href);
    const urlAccountId = url.searchParams.get('accountId');
    if (urlAccountId && urlAccountId !== userStore.userStore.accountId) {
      userStore.setAccountId(urlAccountId);
      setAccountId(urlAccountId);
    }
  }, []);

  useEffect(() => {
    function handleAccountIdChange(newId) {
      setAccountId(userStore.userStore.accountId);
    }
    function handleUserChange() {
      setUser(userStore.userStore.user);
    }
    function handleShowUserLoginChange() {
      setShowUserLogin(userStore.userStore.showUserLogin);
    }
    function handleShowUserOnboardingChange() {
      setShowUserOnboarding(userStore.userStore.showUserOnboarding);
    }
    function handleShowUserConfirmationChange() {
      setShowUserConfirmation(userStore.userStore.showUserConfirmation);
    }
    function handleShowAccountAdditionChange() {
      setShowAccountAddition(userStore.userStore.showAccountAddition);
    }
    function handleShowHomeUserLoginChange() {
      setShowHomeUserLogin(userStore.userStore.showHomeUserLogin);
    }
    function handleShowHomeUserSignupChange() {
      setShowHomeUserSignup(userStore.userStore.showHomeUserSignup);
    }

    const unsubscribeUserAccountId = eventBus.on(EVENT_TYPES.USER_ACCOUNT_ID_UPDATE, handleAccountIdChange);
    const unsubscribeUser = eventBus.on(EVENT_TYPES.USER_UPDATE, handleUserChange);
    const unsubscribeShowUserLogin = eventBus.on(EVENT_TYPES.SHOW_USER_LOGIN_UPDATE, handleShowUserLoginChange);
    const unsubscribeShowUserOnboarding = eventBus.on(EVENT_TYPES.SHOW_USER_ONBOARDING_UPDATE, handleShowUserOnboardingChange);
    const unsubscribeShowUserConfirmation = eventBus.on(EVENT_TYPES.SHOW_USER_CONFIRMATION_UPDATE, handleShowUserConfirmationChange);
    const unsubscribeShowAccountAddition = eventBus.on(EVENT_TYPES.SHOW_ACCOUNT_ADDITION_UPDATE, handleShowAccountAdditionChange);
    const unsubscribeShowHomeUserLogin = eventBus.on(EVENT_TYPES.SHOW_HOME_USER_LOGIN_UPDATE, handleShowHomeUserLoginChange);
    const unsubscribeShowHomeUserSignup = eventBus.on(EVENT_TYPES.SHOW_HOME_USER_SIGNUP_UPDATE, handleShowHomeUserSignupChange);

    setAccountId(userStore.userStore.accountId);
    setUser(userStore.userStore.user);
    setShowUserLogin(userStore.userStore.showUserLogin);
    setShowUserOnboarding(userStore.userStore.showUserOnboarding);
    setShowUserConfirmation(userStore.userStore.showUserConfirmation);
    setShowAccountAddition(userStore.userStore.showAccountAddition);
    setShowHomeUserLogin(userStore.userStore.showHomeUserLogin);
    setShowHomeUserSignup(userStore.userStore.showHomeUserSignup);

    return () => {
      if (typeof unsubscribeUserAccountId === 'function') unsubscribeUserAccountId();
      if (typeof unsubscribeUser === 'function') unsubscribeUser();
      if (typeof unsubscribeShowUserLogin === 'function') unsubscribeShowUserLogin();
      if (typeof unsubscribeShowUserOnboarding === 'function') unsubscribeShowUserOnboarding();
      if (typeof unsubscribeShowUserConfirmation === 'function') unsubscribeShowUserConfirmation();
      if (typeof unsubscribeShowAccountAddition === 'function') unsubscribeShowAccountAddition();
      if (typeof unsubscribeShowHomeUserLogin === 'function') unsubscribeShowHomeUserLogin();
      if (typeof unsubscribeShowHomeUserSignup === 'function') unsubscribeShowHomeUserSignup();
    };
  }, []);

  // When accountId changes, update the URL
  useEffect(() => {
    if (accountId) {
      const url = new URL(window.location.href);
      url.searchParams.set('accountId', accountId);
      window.history.replaceState({}, '', url);
    }
  }, [accountId]);

  useEffect(() => {
    if (accountId !== selectedAccountIdRef.current || selectedAccountIdRef.current == null) {
      selectedAccountIdRef.current = accountId;
      setLoading(true);
      sync()
        .catch((err) => {
          console.error('Failed to sync:', err);
        })
        .finally(() => {
          setLoading(false);
          setInitialSyncCompleted(true);
        });
    }
  }, [accountId]);

  // Handle iframe message for login success
  useEffect(() => {
    const handleMessage = (event) => {
      console.log('handleMessage', event);
      if (event.data === 'login_success') {
        sync().catch((err) => {
          console.error('Failed to sync after login:', err);
        });
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      sync().catch((err) => {
        console.error('Periodic sync failed:', err);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = () => setSidebarVisible(getSidebarLeftVisible());
    const unsub = eventBus.on(EVENT_TYPES.UI_UPDATE, handler);
    return () => { if (typeof unsub === 'function') unsub(); };
  }, []);

  useEffect(() => {
    // Reset view on account change
    const unsubAccount = eventBus.on(EVENT_TYPES.USER_ACCOUNT_ID_UPDATE, () => {
      setActiveTab('Positions');
      // Add any other resets here (e.g., close popups, reset local state)
    });
    return () => { if (typeof unsubAccount === 'function') unsubAccount(); };
  }, []);

  // Redirect to home if any of the specified conditions are true
  useEffect(() => {
    // Only check redirect flags after initial sync has completed
    if (!initialSyncCompleted) return;
    if (
      user === null ||
      accountId === null ||
      showUserLogin ||
      showUserOnboarding ||
      showUserConfirmation ||
      showAccountAddition ||
      showHomeUserLogin ||
      showHomeUserSignup
    ) {
      window.location.href = '/';
    }
  }, [
    initialSyncCompleted,
    user,
    accountId,
    showUserLogin,
    showUserOnboarding,
    showUserConfirmation,
    showAccountAddition,
    showHomeUserLogin,
    showHomeUserSignup
  ]);

  return (
    <div className="flex flex-col h-dvh bg-[#222] relative">
      <Header />
      <div className="flex flex-1 flex-col overflow-y-auto">
        {isMobile ? (
          <MobileContent activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : (
          <>
            <Splitter className='flex flex-1 overflow-y-auto'>
              <Splitter.Panel
                min={sidebarVisible ? 400 : 0}
                max={sidebarVisible ? 500 : 0}
                defaultSize={sidebarVisible ? 450 : 0}
                size={sidebarVisible ? undefined : 0}
                collapsible={false}
                resizable={sidebarVisible}
                disabled={!sidebarVisible}
              >
                <Sidebar activeTab={activeTab} />
              </Splitter.Panel>
              <Splitter.Panel className='flex-col flex'>
                <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
              </Splitter.Panel>
            </Splitter>
            <FloatingBottomLeftPanel header="Quick Actions">
              <div>
                <p className="text-neutral-200">This is your expandable panel content!</p>
                {/* Add any content here */}
              </div>
            </FloatingBottomLeftPanel>
          </>
        )}
      </div>
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, minWidth: 320, maxWidth: 400 }}>
        <OrderStatusListWidget />
      </div>
      <TraderPopupComponent loading={loading} />
    </div>
  );
};

export default TraderContent; 