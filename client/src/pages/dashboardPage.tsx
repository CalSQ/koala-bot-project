import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  GuildButton,
  MainContent,
  MiscButton,
  PageContentDivision,
  SectionBase,
  SectionMain,
} from '../styles/base';

import { API_ENDPOINTS, BOT_INVITE_URL } from '../utils/constants';
import { IoLogOut, IoMegaphone } from 'react-icons/io5';
import { FaUserCog } from 'react-icons/fa';
import { FetchMutualGuilds } from '../queries/FetchMutualGuilds';
import { useContext } from 'react';
import { GuildContext } from '../contexts/GuildContext';
import { PartialGuild } from '../utils/types';
import { fetchGuildIcon } from '../utils/helpers';

export function DashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const { updateGuild } = useContext(GuildContext);
  const { data, isLoading } = FetchMutualGuilds();

  const handleAvailableGuildPress = (guild: PartialGuild) => {
    updateGuild(guild);
    navigate('/dashboard/guild', { state: { from: location } });
  };
  const handleUnavailableGuildPress = (guild: PartialGuild) => {
    window.location.href = BOT_INVITE_URL + guild.id;
  };

  const guildParam = searchParams.get('guild');
  if (guildParam) {
    const guild = data?.data.available.find((guild) => guild.id === guildParam);
    if (guild) handleAvailableGuildPress(guild);
  }

  return (
    <PageContentDivision>
      <MainContent>
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          <SectionBase>
            <header>
              <h1>Guilds</h1>
            </header>
            <SectionMain row>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {data?.data && (
                    <>
                      {data.data.available.map((guild) => (
                        <GuildButton
                          key={guild.id}
                          onPress={() => handleAvailableGuildPress(guild)}
                        >
                          <img src={fetchGuildIcon(guild)} alt={guild.name} />
                          <p>{guild.name}</p>
                        </GuildButton>
                      ))}
                      {data.data.unavailable.map((guild) => (
                        <GuildButton
                          overlay
                          key={guild.id}
                          onPress={() => handleUnavailableGuildPress(guild)}
                        >
                          <img src={fetchGuildIcon(guild)} alt={guild.name} />
                          <p>{guild.name}</p>
                        </GuildButton>
                      ))}
                    </>
                  )}
                </>
              )}
            </SectionMain>
          </SectionBase>

          <SectionBase>
            <header>
              <h1>Miscellaneous</h1>
            </header>
            <SectionMain row>
              <MiscButton
                notification={1}
                onPress={() => {
                  navigate('/dashboard/user', { state: { from: location } });
                }}
              >
                <FaUserCog className="icon" />
                <p>User Settings</p>
              </MiscButton>
              <MiscButton
                onPress={() => {
                  navigate('/dashboard/report', { state: { from: location } });
                }}
              >
                <IoMegaphone className="icon" />
                <p>Report Panel</p>
              </MiscButton>
              <MiscButton
                warning
                onPress={() => {
                  window.location.href = API_ENDPOINTS.AUTH_REVOKE;
                }}
              >
                <IoLogOut className="icon" />
                <p>Logout</p>
              </MiscButton>
            </SectionMain>
          </SectionBase>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
