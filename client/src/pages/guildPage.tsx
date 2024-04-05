import { useContext } from 'react';
import { GuildContext } from '../contexts/GuildContext';

export function GuildPage() {
  const { guild } = useContext(GuildContext);

  return (
    <>
      <h1>
        Guild Page | Guild: {guild?.name} ({guild?.id})
      </h1>
    </>
  );
}
