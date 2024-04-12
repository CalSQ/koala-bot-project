import styled from 'styled-components';
import koalaBotIcon from '../assets/koalaBotIcon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchGuildIcon } from '../utils/helpers';
import { GuildContext } from '../contexts/GuildContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconButton } from '../styles/base';

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  background-color: #151517;
  height: 3.75rem;
  border-bottom: 1px solid #6a6a6a;
  z-index: 100;
  position: sticky;
  top: 0;
`;

const FlexContainer = styled.div`
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.25rem;
`;

const NavIcon = styled.img`
  height: 2.5rem;
  aspect-ratio: 1;
  border-radius: 25%;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavTitle = styled.span`
  font-weight: 600;
  font-size: 1.05rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

type NavbarProps = {
  title?: string;
  sidebarState?: boolean;
  setSidebarState?: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({
  title,
  sidebarState,
  setSidebarState,
}: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { guild } = useContext(GuildContext);

  return (
    <Nav>
      <FlexContainer
        style={{
          justifyContent: 'left',
        }}
      >
        {setSidebarState ? (
          <>
            <IconButton onPress={() => setSidebarState(!sidebarState)}>
              <FaBars size={18} />
            </IconButton>
          </>
        ) : (
          <>
            <NavLink
              onClick={() => navigate('/', { state: { from: location } })}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() =>
                navigate('/builder', { state: { from: location } })
              }
            >
              Builder
            </NavLink>
          </>
        )}
      </FlexContainer>
      {title && (
        <FlexContainer
          style={{
            justifyContent: 'center',
            userSelect: 'none',
          }}
        >
          <NavTitle>{title}</NavTitle>
        </FlexContainer>
      )}
      <FlexContainer
        style={{
          justifyContent: 'right',
          userSelect: 'none',
        }}
      >
        <NavIcon src={guild ? fetchGuildIcon(guild) : koalaBotIcon}></NavIcon>
      </FlexContainer>
    </Nav>
  );
};
