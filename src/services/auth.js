import { fetchData } from './api.js';

const USER_ROUTE = "users"

export const registerUser = async ({ email, password, username, role }) => {
  const registerRequestPath = `${USER_ROUTE}/register`
  return await fetchData(registerRequestPath, "POST", { email, password, username, role });
}

export const loginUser = async ({ email, password }) => {
  const loginRequestPath = `${USER_ROUTE}/login`
  return await fetchData(loginRequestPath, "POST", { email, password, });
}

export const logoutUser = async () => {
  const logoutRequestPath = `${USER_ROUTE}/logout`
  return await fetchData(logoutRequestPath, "POST", {});
}

export const getCurrentUser = async () => {
  const currentUserRequestPath = `${USER_ROUTE}/current-user`

  return await fetchData(currentUserRequestPath, "GET", {});
}