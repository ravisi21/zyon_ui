import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { addAccount } from "../../api/apis";
import * as userStore from "../../store/userStore";
import eventBus, { EVENT_TYPES } from "../../utils/eventBus";

const AddAccountPopup = ({ isOpen, closeable }) => {
  const [accountName, setAccountName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [accountRequest, setAccountRequest] = useState(
    userStore.userStore.userAccountRequest,
  );

  useEffect(() => {
    const handleAccountRequestChange = () => {
      setAccountRequest(userStore.userStore.userAccountRequest);
    };

    const unsubscribe = eventBus.on(
      EVENT_TYPES.USER_ACCOUNT_REQUEST_UPDATE,
      handleAccountRequestChange,
    );
    setAccountRequest(userStore.userStore.userAccountRequest);

    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  if (!isOpen) return null;

  // Determine if popup should be closeable based on paymentId
  const isCloseable = closeable && !accountRequest?.paymentId;

  const handleClose = () => {
    userStore.setShowAddAccountPopup(false);
    userStore.setShowAccountAddition(false);
    userStore.setUserAccountRequest(null); // Clear the account request
  };

  const handleAdd = async () => {
    setError("");
    if (!accountName.trim()) {
      setError("Please Enter an Account Name");
      return;
    }
    setLoading(true);
    try {
      let response;
      if (accountRequest) {
        // Use account request data for API call
        response = await addAccount(
          accountName,
          accountRequest.type,
          accountRequest.paymentId,
        );
      } else {
        // Fallback to original behavior
        response = await addAccount(accountName);
      }

      setLoading(false);
      handleClose();

      // If successful and we have a new account ID, redirect to trader page
      if (response && response.accountId) {
        window.location.href = `/trader?accountId=${response.accountId}`;
      }
    } catch (e) {
      setError(
        e.message || "Unknown Error! Failed to add account. Please try again.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-[90%] mx-4 max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-white p-4 rounded-full bg-slate-800">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-semibold mb-1">
                  Add Trading Account
                </div>
                <div className="text-blue-100">Create your new account</div>
              </div>
            </div>
            {isCloseable && (
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <FaTimes className="text-xl" />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {error && (
            <div className="w-full mb-4 text-red-600 text-center rounded-sm border border-red-200 bg-red-50 px-4 py-2 text-base">
              {error}
            </div>
          )}

          {/* Display account request info if available */}
          {accountRequest && (
            <div className="mb-6 p-4 bg-slate-100 rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm font-medium">
                    Account Type:
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {accountRequest.type}
                  </span>
                </div>
                {accountRequest.paymentId && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm font-medium">
                      Payment ID:
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {accountRequest.paymentId}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col items-start">
            <label
              className="text-sm font-semibold text-gray-700 mb-2"
              htmlFor="accountName"
            >
              Account Name
            </label>
            <input
              id="accountName"
              type="text"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={accountName}
              onChange={(e) => {
                setAccountName(e.target.value);
                if (error && e.target.value.trim()) setError("");
              }}
              autoFocus
              disabled={loading}
              placeholder="Enter account name"
            />
          </div>
          <div className="w-full justify-center flex mt-3">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleAdd}
              disabled={loading}
            >
              {loading ? <span className="loader mr-2"></span> : null}
              Add Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountPopup;
