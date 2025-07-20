import React, { useEffect, useState } from 'react';
import AccountSelectionPopup from '../Account/AccountSelectionPopup';
import eventBus, { EVENT_TYPES } from '../../utils/eventBus';
import * as userStore from '../../store/userStore';

const TraderPopupComponent = ({ loading }) => {
    const [accountId, setAccountId] = useState(userStore.userStore.accountId);
    const [showAccountLogin, setShowAccountLogin] = useState(userStore.userStore.showAccountLogin);
    const [showAccountSelection, setShowAccountSelection] = useState(userStore.userStore.showAccountSelection || userStore.userStore.showAccountSelectionPopup);

    useEffect(() => {
        function handleUserStatusChange() {
            setShowAccountSelection(userStore.userStore.showAccountSelection || userStore.userStore.showAccountSelectionPopup);
            setShowAccountLogin(userStore.userStore.showAccountLogin);
        }
        function handleAccountIdChange() {
            setAccountId(userStore.userStore.accountId);
        }

        const unsubscribeAccountId = eventBus.on(EVENT_TYPES.USER_ACCOUNT_ID_UPDATE, handleAccountIdChange);
        const unsubscribeShowAccountLogin = eventBus.on(EVENT_TYPES.SHOW_ACCOUNT_LOGIN_UPDATE, handleUserStatusChange);
        const unsubscribeShowAccountSelection = eventBus.on(EVENT_TYPES.SHOW_ACCOUNT_SELECTION_UPDATE, handleUserStatusChange);
        const unsubscribeShowAccountSelectionPopup = eventBus.on(EVENT_TYPES.SHOW_ACCOUNT_SELECTION_POPUP_UPDATE, handleUserStatusChange);

        return () => {
            if (typeof unsubscribeAccountId === 'function') unsubscribeAccountId();
            if (typeof unsubscribeShowAccountLogin === 'function') unsubscribeShowAccountLogin();
            if (typeof unsubscribeShowAccountSelection === 'function') unsubscribeShowAccountSelection();
            if (typeof unsubscribeShowAccountSelectionPopup === 'function') unsubscribeShowAccountSelectionPopup();
        };
    }, []);

    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '/api';
    const accountLoginUrl = `${apiBaseUrl.replace(/\/$/, '')}/account-login/${accountId || ''}`;

    return (
        <>
            {!loading && showAccountLogin && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400/20">
                    <button
                        className="absolute top-6 font-semibold right-8 z-10 bg-neutral-300 text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center hover:bg-neutral-200 focus:outline-none"
                        onClick={() => userStore.setShowAccountLogin(false)}
                        title="Close"
                    >
                        &#10005;
                    </button>
                    <iframe
                        src={accountLoginUrl}
                        title="Account Login"
                        className="w-[600px] h-[500px] rounded-sm bg-neutral-700 shadow-2xl border border-neutral-700"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            )}
            <AccountSelectionPopup isOpen={!loading && showAccountSelection} />
        </>
    );
};

export default TraderPopupComponent; 