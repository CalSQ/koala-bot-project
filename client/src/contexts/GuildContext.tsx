import { createContext } from 'react';
import { PartialGuild } from '../utils/types';

type GuildContextType = {
  guild?: PartialGuild;
  updateGuild: (guild?: PartialGuild) => void;
};

export const GuildContext = createContext<GuildContextType>({
  updateGuild: () => {},
});
