import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337';

export async function doLogin(identifier, password){
  const loginUrl = `${API_URL}/auth/local`;
  const response = await axios.post(loginUrl, {identifier, password});

  return response.data;
}


export async function doLogout(jwToken){
  const logoutUrl = `${API_URL}/logout`;
  const headers = { 'authorization': jwToken };
  const response = await axios.post(logoutUrl, {}, { headers });

  return response.data;
}