export enum USER_ROLES {
  OWNER = 'Owner',
  ADMIN = 'Admin',
  DEFAULT = 'Default',
}

export const SUPPORT_SERVER = 'https://discord.gg/yZ4fGKRASK';

export const BASE_ENDPOINT = 'http://localhost:6001/api/';

export enum API_ENDPOINTS {
  AUTH_STATUS = BASE_ENDPOINT + 'auth/status',
  AUTH_REVOKE = BASE_ENDPOINT + 'auth/revoke',
  DISCORD_GUILDS = BASE_ENDPOINT + 'discord/guilds',
}
