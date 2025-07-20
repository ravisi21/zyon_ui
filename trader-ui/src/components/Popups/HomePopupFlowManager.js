import React, { useEffect, useState } from "react";
import { syncLite } from "../../api/apis";
import eventBus, { EVENT_TYPES } from "../../utils/eventBus";
import * as userStore from "../../store/userStore";
import { getResetHomePopups, setResetHomePopups } from "../../store/uiStore";
import UserLoginPopup from "../Account/UserLoginPopup";
import UserSignupPopup from "../Account/UserSignupPopup";
import UserConfirmationPopup from "../Account/UserConfirmationPopup";
import AddAccountPopup from "../Account/AddAccountPopup";
import AdvancedAnalyticsPopup from "../ProductPopups/AdvancedAnalyticsPopup";
import TradingChallengePopup from "../ProductPopups/TradingChallengePopup";
import PaperTradingPopup from "../ProductPopups/PaperTradingPopup";
import AlgoHubPopup from "../ProductPopups/AlgoHubPopup";

const PopupFlowManager = () => {
  const [initialSyncCompleted, setInitialSyncCompleted] = useState(false);

  // Single popup state - only one popup can be visible at a time
  const [activePopup, setActivePopup] = useState(null);

  // Close flags for popup persistence
  const [closeSignInPopup, setCloseSignInPopup] = useState(true);
  const [closeOnboardingPopup, setCloseOnboardingPopup] = useState(false);
  const [closeConfirmationPopup, setCloseConfirmationPopup] = useState(false);
  const [closeAccountAdditionPopup, setCloseAccountAdditionPopup] = useState(false);

  // Local state to track userStore variables
  const [showUserLogin, setShowUserLogin] = useState(
    userStore.userStore.showUserLogin,
  );
  const [showHomeUserLogin, setShowHomeUserLogin] = useState(
    userStore.userStore.showHomeUserLogin,
  );
  const [showHomeUserSignup, setShowHomeUserSignup] = useState(
    userStore.userStore.showHomeUserSignup,
  );
  const [showUserOnboarding, setShowUserOnboarding] = useState(
    userStore.userStore.showUserOnboarding,
  );
  const [showUserConfirmation, setShowUserConfirmation] = useState(
    userStore.userStore.showUserConfirmation,
  );
  const [showAccountAddition, setShowAccountAddition] = useState(
    userStore.userStore.showAccountAddition,
  );
  const [signInFollowUp, setSignInFollowUp] = useState(
    userStore.userStore.signInFollowUp,
  );
  const [showAddAccountPopup, setShowAddAccountPopup] = useState(false);
  const [userAccountRequest, setUserAccountRequest] = useState(
    userStore.userStore.userAccountRequest,
  );

  // Popup numbering system
  const POPUP_TYPES = {
    NONE: null,
    LOGIN: 1,
    SIGNUP: 2,
    CONFIRMATION: 3,
    ANALYSIS: 4,
    LEARN: 5,
    ALGO: 6,
    COMPETITION: 7,
    ADD_ACCOUNT: 8,
  };

  // Centralized function to show a specific popup and hide all others
  const showPopup = (popupNo) => {
    setActivePopup(popupNo);
  };

  // Function to hide all popups
  const hideAllPopups = () => {
    setActivePopup(POPUP_TYPES.NONE);
  };

  // Step 1: Wait for sync call to complete
  useEffect(() => {
    const performInitialSync = async () => {
      try {
        await syncLite();
        setInitialSyncCompleted(true);
      } catch (error) {
        console.error("Initial sync failed:", error);
        setInitialSyncCompleted(true); // Still set to true to allow popup logic to proceed
      }
    };

    performInitialSync();
  }, []);

  // Listen for all userStore variable changes
  useEffect(() => {
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

    const handleUserAccountRequestChange = () => {
      const request = userStore.userStore.userAccountRequest;
      setUserAccountRequest(request);
      // Show popup when userAccountRequest is not null
      setShowAddAccountPopup(!!request);
    };

    // Subscribe to all relevant events
    const unsubscribeShowUserLogin = eventBus.on(
      EVENT_TYPES.SHOW_USER_LOGIN_UPDATE,
      handleShowUserLoginChange,
    );
    const unsubscribeShowHomeUserLogin = eventBus.on(
      EVENT_TYPES.SHOW_HOME_USER_LOGIN_UPDATE,
      handleShowHomeUserLoginChange,
    );
    const unsubscribeShowHomeUserSignup = eventBus.on(
      EVENT_TYPES.SHOW_HOME_USER_SIGNUP_UPDATE,
      handleShowHomeUserSignupChange,
    );
    const unsubscribeShowUserOnboarding = eventBus.on(
      EVENT_TYPES.SHOW_USER_ONBOARDING_UPDATE,
      handleShowUserOnboardingChange,
    );
    const unsubscribeShowUserConfirmation = eventBus.on(
      EVENT_TYPES.SHOW_USER_CONFIRMATION_UPDATE,
      handleShowUserConfirmationChange,
    );
    const unsubscribeShowAccountAddition = eventBus.on(
      EVENT_TYPES.SHOW_ACCOUNT_ADDITION_UPDATE,
      handleShowAccountAdditionChange,
    );
    const unsubscribeSignInFollowUp = eventBus.on(
      EVENT_TYPES.SIGN_IN_FOLLOW_UP_UPDATE,
      handleSignInFollowUpChange,
    );
    const unsubscribeUserAccountRequest = eventBus.on(
      EVENT_TYPES.USER_ACCOUNT_REQUEST_UPDATE,
      handleUserAccountRequestChange,
    );

    // Set initial state
    setUserAccountRequest(userStore.userStore.userAccountRequest);
    setShowAddAccountPopup(!!userStore.userStore.userAccountRequest);

    return () => {
      if (typeof unsubscribeShowUserLogin === "function")
        unsubscribeShowUserLogin();
      if (typeof unsubscribeShowHomeUserLogin === "function")
        unsubscribeShowHomeUserLogin();
      if (typeof unsubscribeShowHomeUserSignup === "function")
        unsubscribeShowHomeUserSignup();
      if (typeof unsubscribeShowUserOnboarding === "function")
        unsubscribeShowUserOnboarding();
      if (typeof unsubscribeShowUserConfirmation === "function")
        unsubscribeShowUserConfirmation();
      if (typeof unsubscribeShowAccountAddition === "function")
        unsubscribeShowAccountAddition();
      if (typeof unsubscribeSignInFollowUp === "function")
        unsubscribeSignInFollowUp();
      if (typeof unsubscribeUserAccountRequest === "function")
        unsubscribeUserAccountRequest();
    };
  }, []);

  // Listen for resetHomePopups event
  useEffect(() => {
    const handleResetHomePopups = () => {
      const shouldReset = getResetHomePopups();
      console.log("shouldReset", shouldReset);
      if (shouldReset) {
        setCloseSignInPopup(false);
        setCloseOnboardingPopup(false);
        setCloseConfirmationPopup(false);
        setCloseAccountAdditionPopup(false);
        setResetHomePopups(false);
      }
    };

    const unsubscribeResetHomePopups = eventBus.on(
      EVENT_TYPES.UI_UPDATE,
      "resetHomePopups",
      handleResetHomePopups,
    );
    return () => {
      if (typeof unsubscribeResetHomePopups === "function")
        unsubscribeResetHomePopups();
    };
  }, []);

  // Parse location once at the beginning
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const showSignIn = urlParams.get("showSignIn") === "true";
    if (showSignIn) {
      setCloseSignInPopup(false);
      userStore.setSignInFollowUp("trader");
    }
  }, []);

  // Combined popup logic - handles both initial sync and real-time updates
  useEffect(() => {
    if (!initialSyncCompleted) return;

    // Priority 1: Login popup
    if (showUserLogin && (!closeSignInPopup || showHomeUserLogin)) {
      showPopup(POPUP_TYPES.LOGIN);
      return;
    }

    // Priority 2: Signup/Onboarding popup
    if ((showUserOnboarding && !closeOnboardingPopup) || showHomeUserSignup) {
      showPopup(POPUP_TYPES.SIGNUP);
      return;
    }

    if (showUserOnboarding || showUserLogin) {
      hideAllPopups();
      return;
    }

    // Priority 3: Confirmation popup
    if (showUserConfirmation && !closeConfirmationPopup) {
      showPopup(POPUP_TYPES.CONFIRMATION);
      return;
    }

    if (showUserConfirmation) {
      hideAllPopups();
      return;
    }

    // Priority 4: Add Account popup
    if (showAddAccountPopup) {
      showPopup(POPUP_TYPES.ADD_ACCOUNT);
      return;
    }

    // Priority 5: Product popups (challenge, analysis, learn, algo)
    if (
      (showAccountAddition ||
        signInFollowUp === "challenge" ||
        signInFollowUp === "analysis" ||
        signInFollowUp === "learn" ||
        signInFollowUp === "algo") &&
      !closeAccountAdditionPopup
    ) {
      switch (signInFollowUp) {
        case "analysis":
          showPopup(POPUP_TYPES.ANALYSIS);
          break;
        case "learn":
          showPopup(POPUP_TYPES.LEARN);
          break;
        case "algo":
          showPopup(POPUP_TYPES.ALGO);
          break;
        default:
          showPopup(POPUP_TYPES.COMPETITION);
          break;
      }
      return;
    }

    // Hide all popups if no conditions are met
    hideAllPopups();

    // Handle signInFollowUp for trader
    if (signInFollowUp === "trader") {
      window.location.href = "/trader";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    closeAccountAdditionPopup,
    showAddAccountPopup,
  ]);

  // Close handlers
  const handleCloseSignIn = () => {
    hideAllPopups();
    setCloseSignInPopup(true);
    userStore.setShowHomeUserLogin(false);
  };

  const handleCloseOnboarding = () => {
    hideAllPopups();
    userStore.setShowHomeUserSignup(false);
    setCloseOnboardingPopup(true);
  };

  const handleCloseConfirmation = () => {
    hideAllPopups();
    setCloseConfirmationPopup(true);
  };

  const handleCloseAnalysis = () => {
    hideAllPopups();
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  const handleCloseLearn = () => {
    hideAllPopups();
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  const handleCloseAlgo = () => {
    hideAllPopups();
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  const handleCloseCompetition = () => {
    hideAllPopups();
    userStore.setSignInFollowUp(null);
    setCloseAccountAdditionPopup(true);
  };

  return (
    <>
      {/* Login Popup */}
      <UserLoginPopup
        isOpen={activePopup === POPUP_TYPES.LOGIN}
        onClose={handleCloseSignIn}
      />

      {/* Signup Popup */}
      <UserSignupPopup
        isOpen={activePopup === POPUP_TYPES.SIGNUP}
        onClose={handleCloseOnboarding}
      />

      {/* Confirmation Popup */}
      <UserConfirmationPopup
        isOpen={activePopup === POPUP_TYPES.CONFIRMATION}
        onClose={handleCloseConfirmation}
      />

      {/* Product Popups */}
      <AdvancedAnalyticsPopup
        isOpen={activePopup === POPUP_TYPES.ANALYSIS}
        onClose={handleCloseAnalysis}
      />

      <PaperTradingPopup
        isOpen={activePopup === POPUP_TYPES.LEARN}
        onClose={handleCloseLearn}
      />

      <AlgoHubPopup
        isOpen={activePopup === POPUP_TYPES.ALGO}
        onClose={handleCloseAlgo}
      />

      <TradingChallengePopup
        isOpen={activePopup === POPUP_TYPES.COMPETITION}
        onClose={handleCloseCompetition}
      />

      {/* Add Account Popup */}
      <AddAccountPopup
        isOpen={activePopup === POPUP_TYPES.ADD_ACCOUNT}
        closeable={!userAccountRequest?.paymentId}
      />
    </>
  );
};

export default PopupFlowManager;
