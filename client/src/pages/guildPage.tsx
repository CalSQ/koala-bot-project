import { useContext } from 'react';
import { GuildContext } from '../contexts/GuildContext';
import { MainContent } from '../styles/base';

export function GuildPageGeneral() {
  const { guild } = useContext(GuildContext);

  return (
    <MainContent>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 600,
        }}
      >
        {guild?.name}
      </h1>
    </MainContent>
  );
}
