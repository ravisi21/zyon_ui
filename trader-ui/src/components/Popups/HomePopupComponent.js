import React, { useEffect, useState } from 'react';
import UserLoginPopup from '../Account/UserLoginPopup';
import UserSignupPopup from '../Account/UserSignupPopup';
import UserConfirmationPopup from '../Account/UserConfirmationPopup';
import OrderPopup from '../Orders/OrderPopup';
import eventBus, { EVENT_TYPES } from '../../utils/eventBus';
import * as userStore from '../../store/userStore';
import { getIsMobile } from '../../store/uiStore';

const HomePopupComponent = ({ loading }) => {
    const [showUserLogin, setShowUserLogin] = useState(userStore.userStore.showUserLogin);
    const [showUserOnboarding, setShowUserOnboarding] = useState(userStore.userStore.showUserOnboarding);
    const [showUserConfirmation, setShowUserConfirmation] = useState(userStore.userStore.showUserConfirmation);
    const [showAccountAddition, setShowAccountAddition] = useState(userStore.userStore.showAccountAddition || userStore.userStore.showAddAccountPopup);
    const [showHomeUserLogin, setShowHomeUserLogin] = useState(userStore.userStore.showHomeUserLogin);
    const [showHomeUserSignup, setShowHomeUserSignup] = useState(userStore.userStore.showHomeUserSignup);
    const isMobile = getIsMobile();

    useEffect(() => {
        function handleUserStatusChange() {
            setShowUserLogin(userStore.userStore.showUserLogin);
            setShowUserOnboarding(userStore.userStore.showUserOnboarding);
            setShowUserConfirmation(userStore.userStore.showUserConfirmation);
            setShowAccountAddition(userStore.userStore.showAccountAddition || userStore.userStore.showAddAccountPopup);
        }
        function handleHomeUserLoginChange() {
            setShowHomeUserLogin(userStore.userStore.showHomeUserLogin);
        }
        function handleHomeUserSignupChange() {
            setShowHomeUserSignup(userStore.userStore.showHomeUserSignup);
        }

        const unsubscribeShowUserLogin = eventBus.on(EVENT_TYPES.SHOW_USER_LOGIN_UPDATE, handleUserStatusChange);
        const unsubscribeShowUserOnboarding = eventBus.on(EVENT_TYPES.SHOW_USER_ONBOARDING_UPDATE, handleUserStatusChange);
        const unsubscribeShowUserConfirmation = eventBus.on(EVENT_TYPES.SHOW_USER_CONFIRMATION_UPDATE, handleUserStatusChange);
        const unsubscribeShowAccountAddition = eventBus.on(EVENT_TYPES.SHOW_ACCOUNT_ADDITION_UPDATE, handleUserStatusChange);
        const unsubscribeShowAddAccountPopup = eventBus.on(EVENT_TYPES.SHOW_ADD_ACCOUNT_POPUP_UPDATE, handleUserStatusChange);
        const unsubscribeShowHomeUserLogin = eventBus.on(EVENT_TYPES.SHOW_HOME_USER_LOGIN_UPDATE, handleHomeUserLoginChange);
        const unsubscribeShowHomeUserSignup = eventBus.on(EVENT_TYPES.SHOW_HOME_USER_SIGNUP_UPDATE, handleHomeUserSignupChange);

        return () => {
            if (typeof unsubscribeShowUserLogin === 'function') unsubscribeShowUserLogin();
            if (typeof unsubscribeShowUserOnboarding === 'function') unsubscribeShowUserOnboarding();
            if (typeof unsubscribeShowUserConfirmation === 'function') unsubscribeShowUserConfirmation();
            if (typeof unsubscribeShowAccountAddition === 'function') unsubscribeShowAccountAddition();
            if (typeof unsubscribeShowAddAccountPopup === 'function') unsubscribeShowAddAccountPopup();
            if (typeof unsubscribeShowHomeUserLogin === 'function') unsubscribeShowHomeUserLogin();
            if (typeof unsubscribeShowHomeUserSignup === 'function') unsubscribeShowHomeUserSignup();
        };
    }, []);

    // Function to hide home login popup
    const hideHomeUserLogin = () => {
        userStore.setShowHomeUserLogin(false);
    };

    // Function to hide home signup popup
    const hideHomeUserSignup = () => {
        userStore.setShowHomeUserSignup(false);
    };

    return (
        <>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-dark-bg/60 z-50">
                    <img
                        src={`${process.env.PUBLIC_URL}/logo_icon.svg`}
                        alt="Logo"
                        className="animate-jump h-32 w-32"
                        style={{ filter: 'drop-shadow(0 0 16px #1abe4d)' }}
                    />
                    <style>{`
                        @keyframes jump {
                            0%   { transform: translateY(0); }
                            20%  { transform: translateY(-30px); }
                            40%  { transform: translateY(0); }
                            60%  { transform: translateY(-15px); }
                            80%  { transform: translateY(0); }
                            100% { transform: translateY(0); }
                        }
                        .animate-jump {
                            animation: jump 1.2s infinite cubic-bezier(.28,.84,.42,1);
                        }
                    `}</style>
                </div>
            )}
            <UserLoginPopup isOpen={showHomeUserLogin} homeScreen={true} onClose={hideHomeUserLogin} />
            <UserSignupPopup isOpen={showHomeUserSignup || (!loading && showUserOnboarding)} homeScreen={true} onClose={hideHomeUserSignup} />
            <UserConfirmationPopup isOpen={!loading && !showUserLogin && showUserConfirmation} />
            {!isMobile && <OrderPopup />}
        </>
    );
};

export default HomePopupComponent; 