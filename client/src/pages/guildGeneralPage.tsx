import { useContext } from 'react';
import { GuildContext } from '../contexts/GuildContext';
import { MainContent, PageContentDivision } from '../styles/base';

export function GuildGeneralPage() {
  const { guild } = useContext(GuildContext);

  return (
    <PageContentDivision>
      <MainContent>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 600,
          }}
        >
          General
          <br />
          {guild?.name}
        </h1>
      </MainContent>
    </PageContentDivision>
  );
}
