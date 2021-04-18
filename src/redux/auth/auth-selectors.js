const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;

const authSelectors = { getIsAuthenticated, getUserEmail };

export default authSelectors;
