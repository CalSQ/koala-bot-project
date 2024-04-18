import { useLocation, useNavigate } from 'react-router-dom';
import { FetchAuthSession } from '../queries/FetchAuthSession';
import styled from 'styled-components';
import {
  ButtonBase,
  Link,
  MainContent,
  PageContentDivision,
} from '../styles/base';
import { FaDiscord, FaExternalLinkAlt } from 'react-icons/fa';
import { API_ENDPOINTS, SUPPORT_SERVER } from '../utils/constants';

const Footer = styled.footer`
  font-size: 0.85rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 25px;
  font-weight: 500;
`;

export function HomePage() {
  const { data } = FetchAuthSession();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    if (data?.data) {
      navigate('/dashboard', { state: { from: location } });
    } else {
      window.location.href = API_ENDPOINTS.AUTH_LOGIN;
    }
  };

  return (
    <PageContentDivision>
      <MainContent
        style={{
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/koalaBotIcon.png"
          alt="Koala Bot Logo"
          style={{
            maxWidth: '100px',
            height: 'auto',
          }}
        />
        Welcome to the Dashboard!
        <ButtonBase
          onPress={handleLogin}
          style={{
            maxWidth: '25rem',
            width: '100%',
          }}
        >
          {data?.data ? (
            <>
              <FaExternalLinkAlt size={15} />
              Go to Dashboard
            </>
          ) : (
            <>
              <FaDiscord size={18} />
              Log in with Discord
            </>
          )}
        </ButtonBase>
        <span
          style={{
            color: '#6C6C6C',
            fontSize: '0.8rem',
          }}
        >
          {process.env.REACT_APP_NODE_ENV === 'development'
            ? 'Development'
            : 'Production'}{' '}
          Build
        </span>
      </MainContent>
      <Footer>
        <span
          style={{
            color: '#6C6C6C',
            paddingRight: '5px',
          }}
        >
          Need support?
        </span>
        <Link href={SUPPORT_SERVER}>Join the Discord!</Link>
      </Footer>
    </PageContentDivision>
  );
}
