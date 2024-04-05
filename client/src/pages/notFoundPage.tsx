import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link, MainContent, PageContentDivision } from '../styles/base';
import { Button } from 'react-aria-components';
import { SUPPORT_SERVER } from '../utils/constants';

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

export function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReturn = () => {
    navigate(location.state?.from?.pathname ?? '/');
  };

  return (
    <PageContentDivision>
      <MainContent
        style={{
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: '5rem',
            fontWeight: '900',
          }}
        >
          404
        </span>
        <Button onPress={handleReturn}>Return</Button>
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
