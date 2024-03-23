import { createContext } from 'react';
import { UserSession } from '../utils/types';

type AuthProviderValue = {
  auth: UserSession | undefined;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
};

export const AuthContext = createContext<AuthProviderValue>({
  auth: undefined,
  handleLogin: async () => {},
  handleLogout: async () => {},
});
