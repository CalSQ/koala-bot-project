import axios, { AxiosRequestConfig } from 'axios';
import { MutualGuildsResponse, UserSession } from './types';
import { API_ENDPOINTS } from './constants';

const ReqConf: AxiosRequestConfig = {
  withCredentials: true,
};

export const getAuthSession = async () => {
  console.log('Running API Request');
  return await axios.get<UserSession>(API_ENDPOINTS.AUTH_STATUS, ReqConf);
};
export const getMutualGuilds = async () =>
  await axios.get<MutualGuildsResponse>(API_ENDPOINTS.DISCORD_GUILDS, ReqConf);
