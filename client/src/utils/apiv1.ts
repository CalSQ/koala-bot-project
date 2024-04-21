import axios, { AxiosRequestConfig } from 'axios';
import { MutualGuildsResponse, RobloxStatus, UserSession } from './types';
import { API_ENDPOINTS } from './constants';

const ReqConf: AxiosRequestConfig = {
  withCredentials: true,
};

export const getAuthSession = async () => {
  return await axios.get<UserSession>(API_ENDPOINTS.AUTH_STATUS, ReqConf);
};

export const getRobloxStatus = async () => {
  return await axios.get<RobloxStatus>(API_ENDPOINTS.ROBLOX_STATUS, ReqConf);
};

export const getMutualGuilds = async () =>
  await axios.get<MutualGuildsResponse>(API_ENDPOINTS.DISCORD_GUILDS, ReqConf);
