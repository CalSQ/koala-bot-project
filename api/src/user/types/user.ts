import { OAuthTokens } from 'src/auth/interfaces/auth';
import { USER_ROLES } from 'src/utils/constants';

export type UserIdentifier = {
  discordId: string;
};

export type UserDetails = UserIdentifier;

export type PartialUserDetails = Omit<Partial<UserDetails>, 'discordId'>;

export type UserSession = {
  tokens: OAuthTokens;
  roblox?: {
    tokens: OAuthTokens;
  };
  avatar: string;
  roles: USER_ROLES[];
} & UserIdentifier;
