import { fetchData } from '../api.js';

const USER_ROUTE = "users"

export const registerUser = async ({ email, password }) => {
  const registerRequestPath = `${USER_ROUTE}/register`
  const response = await fetchData(registerRequestPath, "POST", { email, password });

  console.log('regiuster', response);
}

export const loginUser = async ({ email, password }) => {
  const loginRequestPath = `${USER_ROUTE}/login`
  const response = await fetchData(loginRequestPath, "POST", { email, password });

  console.log('login', response);
}