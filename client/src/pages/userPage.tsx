import { FaLink, FaTrash } from 'react-icons/fa';
import { AriaSelect } from '../components/AriaSelect';
import { FetchRobloxStatus } from '../queries/FetchRobloxStatus';
import {
  ContentButton,
  MainContent,
  MiscButton,
  PageContentDivision,
  SectionMain,
  SectionRow,
  SelectListItem,
  SectionBase,
  Link,
} from '../styles/base';
import { API_ENDPOINTS } from '../utils/constants';
import styled from 'styled-components';
import { HashLoader } from 'react-spinners';

const Card = styled.div`
  position: relative;
  background-color: #131315;
  border: 1px solid #212121;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 32px 48px;
  margin: 1rem 0;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export function UserPage() {
  const { data, isLoading } = FetchRobloxStatus();

  const handleRobloxAuth = () => {
    if (!data?.data) {
      window.location.href = API_ENDPOINTS.ROBLOX_LOGIN;
    } else {
      window.location.href = API_ENDPOINTS.ROBLOX_LOGOUT;
    }
  };

  return (
    <PageContentDivision>
      <MainContent>
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          {/* Linking */}
          <SectionBase>
            <SectionMain>
              <SectionRow>
                <Card>
                  {isLoading ? (
                    <HashLoader color="#2f2f2f" />
                  ) : (
                    <>
                      <img
                        src="/images/defaultRobloxIcon.png"
                        style={{
                          height: '5rem',
                          aspectRatio: '1',
                          borderRadius: '25%',
                        }}
                      />
                      <CardDetails>
                        <Link
                          href={
                            data?.data
                              ? data?.data.profile_url
                              : 'https://www.roblox.com'
                          }
                          style={{
                            textDecoration: 'none',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {data?.data ? data?.data.display_name : 'Roblox'}
                        </Link>
                        <span
                          style={{
                            color: '#858585',
                          }}
                        >
                          {data?.data
                            ? '@' + data?.data.username
                            : 'Link your Roblox account'}
                        </span>
                      </CardDetails>
                      <ContentButton
                        onPress={handleRobloxAuth}
                        style={{
                          position: 'absolute',
                          right: '1rem',
                          top: '1rem',
                        }}
                      >
                        {data?.data ? (
                          <FaTrash size={15} />
                        ) : (
                          <FaLink size={15} />
                        )}
                      </ContentButton>
                    </>
                  )}
                </Card>
              </SectionRow>
            </SectionMain>
          </SectionBase>

          {/* Stats */}
          <SectionBase>
            <header>
              <h1>Stats</h1>
            </header>
            <SectionMain>
              <AriaSelect label="Prefix">
                <SelectListItem>Hi</SelectListItem>
                <SelectListItem>There</SelectListItem>
              </AriaSelect>
            </SectionMain>
          </SectionBase>

          {/* Userdata */}
          <SectionBase style={{ display: 'none' }}>
            <header>
              <h1>Userdata</h1>
            </header>
            <SectionMain>
              <MiscButton warning isDisabled overlay>
                <p>Request the deletion of your data</p>
              </MiscButton>
            </SectionMain>
          </SectionBase>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
