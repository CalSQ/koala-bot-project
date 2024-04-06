import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  MainButton,
  MainContent,
  PageContentDivision,
  SectionHeading,
  SectionMain,
  Seperator,
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
    updateGuild(guild);
    navigate('/dashboard/guild', { state: { from: location } });
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
          <section>
            <header
              style={{
                marginBottom: '15px',
              }}
            >
              <SectionHeading>Guilds</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              {/* <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton> */}
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {data?.data && (
                    <>
                      {data.data.available.map((guild) => (
                        <MainButton
                          key={guild.id}
                          onPress={() => handleAvailableGuildPress(guild)}
                        >
                          <img src={fetchGuildIcon(guild)} alt={guild.name} />
                          <p>{guild.name}</p>
                        </MainButton>
                      ))}
                      {data.data.unavailable.map((guild) => (
                        <MainButton
                          $link
                          key={guild.id}
                          onPress={() => handleUnavailableGuildPress(guild)}
                        >
                          <img src={fetchGuildIcon(guild)} alt={guild.name} />
                          <p>{guild.name}</p>
                        </MainButton>
                      ))}
                    </>
                  )}
                </>
              )}
            </SectionMain>
          </section>

          <section>
            <header
              style={{
                marginBottom: '15px',
              }}
            >
              <SectionHeading>Other</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              <MainButton
                $slim
                $notification={1}
                onPress={() => {
                  navigate('/dashboard/user', { state: { from: location } });
                }}
              >
                <FaUserCog className="icon" />
                <p>User Settings</p>
              </MainButton>
              <MainButton
                $slim
                onPress={() => {
                  navigate('/dashboard/report', { state: { from: location } });
                }}
              >
                <IoMegaphone className="icon" />
                <p>Report Panel</p>
              </MainButton>
              <MainButton
                $slim
                $warning
                onPress={() => {
                  window.location.href = API_ENDPOINTS.AUTH_REVOKE;
                }}
              >
                <IoLogOut className="icon" />
                <p>Logout</p>
              </MainButton>
            </SectionMain>
          </section>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
