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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        dignissimos eos corrupti, amet qui officiis reprehenderit id nesciunt
        totam modi incidunt est voluptates ipsa. Saepe nemo corrupti voluptatum
        cumque quo?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        dignissimos eos corrupti, amet qui officiis reprehenderit id nesciunt
        totam modi incidunt est voluptates ipsa. Saepe nemo corrupti voluptatum
        cumque quo?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        dignissimos eos corrupti, amet qui officiis reprehenderit id nesciunt
        totam modi incidunt est voluptates ipsa. Saepe nemo corrupti voluptatum
        cumque quo?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        dignissimos eos corrupti, amet qui officiis reprehenderit id nesciunt
        totam modi incidunt est voluptates ipsa. Saepe nemo corrupti voluptatum
        cumque quo?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        dignissimos eos corrupti, amet qui officiis reprehenderit id nesciunt
        totam modi incidunt est voluptates ipsa. Saepe nemo corrupti voluptatum
        cumque quo?
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        dignissimos eos corrupti, amet qui officiis reprehenderit id nesciunt
        totam modi incidunt est voluptates ipsa. Saepe nemo corrupti voluptatum
        cumque quo?
      </p>
      <br />
    </MainContent>
  );
}
