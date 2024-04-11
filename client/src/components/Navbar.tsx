import styled from 'styled-components';
import koalaBotIcon from '../assets/koalaBotIcon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchGuildIcon } from '../utils/helpers';
import { GuildContext } from '../contexts/GuildContext';
import { useContext } from 'react';

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  background-color: inherit;
  height: 3.75rem;
  border-bottom: 1px solid #6a6a6a;
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
  returnLink?: boolean;
};

export const Navbar = ({ title, returnLink }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { guild, updateGuild } = useContext(GuildContext);

  return (
    <Nav>
      <FlexContainer
        style={{
          justifyContent: 'left',
        }}
      >
        {returnLink ? (
          <NavLink
            onClick={() => {
              updateGuild(undefined);
              navigate('/dashboard', { state: { from: location } });
            }}
          >
            Return to dashboard
          </NavLink>
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
