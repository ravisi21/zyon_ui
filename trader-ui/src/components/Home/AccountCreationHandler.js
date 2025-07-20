import * as userStore from "../../store/userStore";

const AccountCreationHandler = {
  /**
   * Creates an account request based on type and paymentId
   * @param {string} type - Account type (DEMO, COMPETITION, ANALYSIS, LEARN, ALGO)
   * @param {string} paymentId - Payment ID for the account
   */
  createAccountRequest: (type, paymentId) => {
    const accountRequest = {
      type: type,
      paymentId: paymentId,
      accountName: null,
    };

    userStore.setUserAccountRequest(accountRequest);
  },

  /**
   * Clears the account request
   */
  clearAccountRequest: () => {
    userStore.setUserAccountRequest(null);
  },
};

export default AccountCreationHandler;
