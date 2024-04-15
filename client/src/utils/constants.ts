export enum USER_ROLES {
  OWNER = 'Owner',
  ADMIN = 'Admin',
  DEFAULT = 'Default',
}

export const SUPPORT_SERVER = 'https://discord.gg/yZ4fGKRASK';

export const BASE_ENDPOINT: string =
  process.env.REACT_APP_NODE_ENV === 'development'
    ? 'http://localhost:6001/api/'
    : 'https://istealbabiesfor.fun/api/';

export const API_ENDPOINTS = {
  AUTH_LOGIN: BASE_ENDPOINT + 'auth/login',
  AUTH_STATUS: BASE_ENDPOINT + 'auth/status',
  AUTH_REVOKE: BASE_ENDPOINT + 'auth/revoke',
  AUTH_REDIRECT: BASE_ENDPOINT + 'auth/redirect',
  DISCORD_GUILDS: BASE_ENDPOINT + 'discord/guilds',
};

export const DISCORD_APP_ID =
  process.env.REACT_APP_NODE_ENV === 'development'
    ? '1149189404770979840'
    : '1225944222855729243';

export const BOT_INVITE_URL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_APP_ID}&permissions=8&scope=bot+applications.commands&response_type=code&redirect_uri=${API_ENDPOINTS.AUTH_REDIRECT}&guild_id=`;
