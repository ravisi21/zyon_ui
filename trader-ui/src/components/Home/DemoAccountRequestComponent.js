import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AccountCreationHandler from "../Home/AccountCreationHandler";
import * as userStore from "../../store/userStore";
import eventBus, { EVENT_TYPES } from "../../utils/eventBus";

const DemoAccountRequestComponent = ({
  className = "",
  textColor = "text-blue-600",
  hoverColor = "hover:text-blue-700",
  showIcon = true,
  customText = "Request Demo Account",
  onDemoRequest,
}) => {
  const [user, setUser] = useState(userStore.userStore.user);

  useEffect(() => {
    const handleUserChange = () => {
      setUser(userStore.userStore.user);
    };

    const unsubscribeUser = eventBus.on(
      EVENT_TYPES.USER_UPDATE,
      handleUserChange,
    );
    setUser(userStore.userStore.user);

    return () => {
      if (typeof unsubscribeUser === "function") unsubscribeUser();
    };
  }, []);

  const handleDemoRequest = () => {
    // Create account request for DEMO type with null paymentId
    AccountCreationHandler.createAccountRequest("DEMO", null);

    // Close parent popup if callback is provided
    if (onDemoRequest) {
      onDemoRequest();
    }
  };

  // Don't show the link if user has already used demo
  if (user && user.demoUsed) {
    return null;
  }

  return (
    <button
      onClick={handleDemoRequest}
      className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${textColor} ${hoverColor} ${className}`}
    >
      {showIcon && <FaExternalLinkAlt className="w-3 h-3" />}
      <span>{customText}</span>
    </button>
  );
};

export default DemoAccountRequestComponent;
