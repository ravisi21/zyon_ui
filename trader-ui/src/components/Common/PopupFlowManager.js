import React, { useEffect, useState } from 'react';
import { sync } from '../../api/apis';
import eventBus, { EVENT_TYPES } from '../../utils/eventBus';
import * as userStore from '../../store/userStore';
import { getResetHomePopups, setResetHomePopups } from '../../store/uiStore';
import UserLoginPopup from '../Account/UserLoginPopup';
import UserSignupPopup from '../Account/UserSignupPopup';
import UserConfirmationPopup from '../Account/UserConfirmationPopup';
import AdvancedAnalyticsPopup from '../ProductPopups/AdvancedAnalyticsPopup';
import TradingChallengePopup from '../ProductPopups/TradingChallengePopup';
import PaperTradingPopup from '../ProductPopups/PaperTradingPopup';
import AlgoHubPopup from '../ProductPopups/AlgoHubPopup';

const PopupFlowManager = () => {
  const [initialSyncCompleted, setInitialSyncCompleted] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [closeSignInPopup, setCloseSignInPopup] = useState(true);
  const [closeOnboardingPopup, setCloseOnboardingPopup] = useState(false);
  const [closeConfirmationPopup, setCloseConfirmationPopup] = useState(false);
  const [closeAccountAdditionPopup, setCloseAccountAdditionPopup] = useState(false);
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showAnalysisPopup, setShowAnalysisPopup] = useState(false);
  const [showLearnPopup, setShowLearnPopup] = useState(false);
  const [showAlgoPopup, setShowAlgoPopup] = useState(false);
  const [showCompetitionPopup, setShowCompetitionPopup] = useState(false);

  // Local state to track userStore variables
  const [user, setUser] = useState(userStore.userStore.user);
  const [showUserLogin, setShowUserLogin] = useState(userStore.userStore.showUserLogin);
  const [showHomeUserLogin, setShowHomeUserLogin] = useState(userStore.userStore.showHomeUserLogin);
  const [showHomeUserSignup, setShowHomeUserSignup] = useState(userStore.userStore.showHomeUserSignup);
  const [showUserOnboarding, setShowUserOnboarding] = useState(userStore.userStore.showUserOnboarding);
  const [showUserConfirmation, setShowUserConfirmation] = useState(userStore.userStore.showUserConfirmation);
  const [showAccountAddition, setShowAccountAddition] = useState(userStore.userStore.showAccountAddition);
  const [signInFollowUp, setSignInFollowUp] = useState(userStore.userStore.signInFollowUp);

  // Step 1: Wait for sync call to complete
  useEffect(() => {
    const performInitialSync = async () => {
      try {
        await sync();
        setInitialSyncCompleted(true);
      } catch (error) {
        console.error('Initial sync failed:', error);
        setInitialSyncCompleted(true); // Still set to true to allow popup logic to proceed
      }
    };

    performInitialSync();
  }, []);

  // Listen for all userStore variable changes
  useEffect(() => {
    const handleUserChange = () => {
      setUser(userStore.userStore.user);
    };

    const handleShowUserLoginChange = () => {
      setShowUserLogin(userStore.userStore.showUserLogin);
    };

    const handleShowHomeUserLoginChange = () => {
      setShowHomeUserLogin(userStore.userStore.showHomeUserLogin);
    };

    const handleShowHomeUserSignupChange = () => {
      setShowHomeUserSignup(userStore.userStore.showHomeUserSignup);
    };

    const handleShowUserOnboardingChange = () => {
      setShowUserOnboarding(userStore.userStore.showUserOnboarding);
    };

    const handleShowUserConfirmationChange = () => {
      setShowUserConfirmation(userStore.userStore.showUserConfirmation);
    };

    const handleShowAccountAdditionChange = () => {
      setShowAccountAddition(userStore.userStore.showAccountAddition);
    };

    const handleSignInFollowUpChange = () => {
      setSignInFollowUp(userStore.userStore.signInFollowUp);
    };

    // Subscribe to all relevant events
    const unsubscribeUser = eventBus.on(EVENT_TYPES.USER_UPDATE, handleUserChange);
    const unsubscribeShowUserLogin = eventBus.on(EVENT_TYPES.SHOW_USER_LOGIN_UPDATE, handleShowUserLoginChange);
    const unsubscribeShowHomeUserLogin = eventBus.on(EVENT_TYPES.SHOW_HOME_USER_LOGIN_UPDATE, handleShowHomeUserLoginChange);
    const unsubscribeShowHomeUserSignup = eventBus.on(EVENT_TYPES.SHOW_HOME_USER_SIGNUP_UPDATE, handleShowHomeUserSignupChange);
    const unsubscribeShowUserOnboarding = eventBus.on(EVENT_TYPES.SHOW_USER_ONBOARDING_UPDATE, handleShowUserOnboardingChange);
    const unsubscribeShowUserConfirmation = eventBus.on(EVENT_TYPES.SHOW_USER_CONFIRMATION_UPDATE, handleShowUserConfirmationChange);
    const unsubscribeShowAccountAddition = eventBus.on(EVENT_TYPES.SHOW_ACCOUNT_ADDITION_UPDATE, handleShowAccountAdditionChange);
    const unsubscribeSignInFollowUp = eventBus.on(EVENT_TYPES.SIGN_IN_FOLLOW_UP_UPDATE, handleSignInFollowUpChange);

    return () => {
      if (typeof unsubscribeUser === 'function') unsubscribeUser();
      if (typeof unsubscribeShowUserLogin === 'function') unsubscribeShowUserLogin();
      if (typeof unsubscribeShowHomeUserLogin === 'function') unsubscribeShowHomeUserLogin();
      if (typeof unsubscribeShowHomeUserSignup === 'function') unsubscribeShowHomeUserSignup();
      if (typeof unsubscribeShowUserOnboarding === 'function') unsubscribeShowUserOnboarding();
      if (typeof unsubscribeShowUserConfirmation === 'function') unsubscribeShowUserConfirmation();
      if (typeof unsubscribeShowAccountAddition === 'function') unsubscribeShowAccountAddition();
      if (typeof unsubscribeSignInFollowUp === 'function') unsubscribeSignInFollowUp();
    };
  }, []);

  // Listen for resetHomePopups event
  useEffect(() => {
    const handleResetHomePopups = () => {
      const shouldReset = getResetHomePopups();
      console.log('shouldReset', shouldReset);
      if (shouldReset) {
        setCloseSignInPopup(false);
        setCloseOnboardingPopup(false);
        setCloseConfirmationPopup(false);
        setCloseAccountAdditionPopup(false);
        setResetHomePopups(false);
      }
    };

    const unsubscribeResetHomePopups = eventBus.on(EVENT_TYPES.UI_UPDATE, 'resetHomePopups', handleResetHomePopups);
    return () => {
      if (typeof unsubscribeResetHomePopups === 'function') unsubscribeResetHomePopups();
    };
  }, []);

  // Parse location once at the beginning
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const showSignIn = urlParams.get('showSignIn') === 'true';
    if (showSignIn) {
      setCloseSignInPopup(false);
      userStore.setSignInFollowUp('trader');
    }
  }, []);

  // Combined popup logic - handles both initial sync and real-time updates
  useEffect(() => {
    if (!initialSyncCompleted) return;

    if (showUserLogin && (!closeSignInPopup || showHomeUserLogin)) {
      setShowSignInPopup(true);
      return;
    }

    // Handle onboarding popup
    if ((showUserOnboarding && !closeOnboardingPopup) || (showHomeUserSignup)) {
      setShowOnboardingPopup(true);
      return;
    }

    setShowOnboardingPopup(false);
    if (showUserLogin) {
      return;
    }
    if (showUserOnboarding) {
      return;
    }

    // Handle confirmation popup
    if (showUserConfirmation && !closeConfirmationPopup) {
      setShowConfirmationPopup(true);
      return;
    }

    setShowConfirmationPopup(false);
    if (showUserConfirmation) {
      return;
    }

    // Handle account addition popups
    if ((showAccountAddition
      || signInFollowUp === 'challenge'
      || signInFollowUp === 'analysis'
      || signInFollowUp === 'learn'
      || signInFollowUp === 'algo')
      && !closeAccountAdditionPopup) {
      switch (signInFollowUp) {
        case 'analysis':
          setShowAnalysisPopup(true);
          setShowLearnPopup(false);
          setShowAlgoPopup(false);
          setShowCompetitionPopup(false);
          break;
        case 'learn':
          setShowAnalysisPopup(false);
          setShowLearnPopup(true);
          setShowAlgoPopup(false);
          setShowCompetitionPopup(false);
          break;
        case 'algo':
          setShowAnalysisPopup(false);
          setShowLearnPopup(false);
          setShowAlgoPopup(true);
          setShowCompetitionPopup(false);
          break;
        default:
          setShowAnalysisPopup(false);
          setShowLearnPopup(false);
          setShowAlgoPopup(false);
          setShowCompetitionPopup(true);
          break;
      }
      return;
    }

    setShowAnalysisPopup(false);
    setShowLearnPopup(false);
    setShowAlgoPopup(false);
    setShowCompetitionPopup(false);

    if (showAccountAddition) {
      return;
    }

    // Handle signInFollowUp for trader
    if (signInFollowUp === 'trader') {
      window.location.href = '/trader';
    }

  }, [
    initialSyncCompleted,
    showUserLogin,
    showHomeUserLogin,
    showHomeUserSignup,
    showUserOnboarding,
    showUserConfirmation,
    showAccountAddition,
    signInFollowUp,
    closeSignInPopup,
    closeOnboardingPopup,
    closeConfirmationPopup,
    showAnalysisPopup,
    showLearnPopup,
    showAlgoPopup,
    showCompetitionPopup,
  ]);

  // Close handlers
  const handleCloseSignIn = () => {
    setShowSignInPopup(false);
    setCloseSignInPopup(true);
    userStore.setShowHomeUserLogin(false);
  };

  const handleCloseOnboarding = () => {
    setShowOnboardingPopup(false);
    userStore.setShowHomeUserSignup(false);
    setCloseOnboardingPopup(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmationPopup(false);
    setCloseConfirmationPopup(true);
  };

  const handleCloseAnalysis = () => {
    setShowAnalysisPopup(false);
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  const handleCloseLearn = () => {
    setShowLearnPopup(false);
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  const handleCloseAlgo = () => {
    setShowAlgoPopup(false);
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  const handleCloseCompetition = () => {
    setShowCompetitionPopup(false);
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  return (
    <>
      {/* Login Popup */}
      <UserLoginPopup
        isOpen={showSignInPopup}
        onClose={handleCloseSignIn}
      />

      {/* Signup Popup */}
      <UserSignupPopup
        isOpen={showOnboardingPopup}
        onClose={handleCloseOnboarding}
      />

      {/* Confirmation Popup */}
      <UserConfirmationPopup
        isOpen={showConfirmationPopup}
        onClose={handleCloseConfirmation}
      />

      {/* Product Popups */}
      <AdvancedAnalyticsPopup
        isOpen={showAnalysisPopup}
        onClose={handleCloseAnalysis}
      />

      <PaperTradingPopup
        isOpen={showLearnPopup}
        onClose={handleCloseLearn}
      />

      <AlgoHubPopup
        isOpen={showAlgoPopup}
        onClose={handleCloseAlgo}
      />

      <TradingChallengePopup
        isOpen={showCompetitionPopup}
        onClose={handleCloseCompetition}
      />
    </>
  );
};

export default PopupFlowManager; 