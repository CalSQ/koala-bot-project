import { USER_ROLES } from './constants';

export type UserSession = {
  discordId: string;
  avatar: string;
  roles: USER_ROLES[];
};

export type RobloxStatus = {
  robloxId: string;
};

export type PartialGuild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
};

export type MutualGuildsResponse = {
  available: PartialGuild[];
  unavailable: PartialGuild[];
};
