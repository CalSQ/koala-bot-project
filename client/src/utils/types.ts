import { USER_ROLES } from './constants';

export type UserSession = {
  discordId: string;
  avatar: string;
  roles: USER_ROLES[];
};

export type RobloxProfile = {
  id: string;
  username: string;
  display_name: string;
  profile_url: string;
  picture_url: string;
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
