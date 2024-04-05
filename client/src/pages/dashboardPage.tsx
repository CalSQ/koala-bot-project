import { useLocation, useNavigate } from 'react-router-dom';
import {
  MainButton,
  MainContent,
  PageContentDivision,
  SectionHeading,
  SectionMain,
  Seperator,
} from '../styles/base';

import defaultDiscordIcon from '../assets/defaultDiscordIcon.png';

import { API_ENDPOINTS } from '../utils/constants';
import { IoLogOut, IoMegaphone } from 'react-icons/io5';
import { FaUserCog } from 'react-icons/fa';

export function DashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();

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
              <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton>
              <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton>
              <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton>
              <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton>
              <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton>
              <MainButton>
                <img src={defaultDiscordIcon} alt="Guild" />
                <p>Guild name</p>
              </MainButton>
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
