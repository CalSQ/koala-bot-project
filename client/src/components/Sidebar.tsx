import { useContext } from 'react';
import {
  FaCog,
  FaHammer,
  FaTag,
  FaUsers,
  FaAngleDoubleLeft,
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GuildContext } from '../contexts/GuildContext';

const SidebarBase = styled.div<{ sidebarState: boolean }>`
  position: sticky;
  top: 3.75rem;
  background-color: #131315;
  border-right: 1px solid #6a6a6a;
  height: calc(100vh - 3.75rem);
  width: 250px;
  min-width: 250px;
  display: ${(props) => (props.sidebarState ? 'flex' : 'none')};
  flex-direction: column;
  overflow-y: auto;
  z-index: 1;
  // resize: horizontal;

  & > :last-child {
    position: sticky;
    bottom: 0;
    margin-top: auto;
    border-bottom: none;
    border-top: 1px solid #212121;
  }

  @media (max-width: 800px) {
    position: fixed;
    width: 100vw;
  }
`;

const NavSidebarItem = styled.div<{ hoverColor?: string }>`
  align-items: center;
  display: flex;
  text-decoration: none;
  font-weight: 500;
  color: #686868;
  box-sizing: border-box;
  background-color: #111113;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #212121;
  padding: 16px;
  padding-left: 1.5rem;
  transition: all 150ms ease-in-out;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #0b0b0c;
    color: #adadad;

    & > .icon {
      color: ${(props) => props.hoverColor ?? '#9960a3'};
    }
  }

  & > .icon {
    transition: all 150ms ease-in-out;
  }
`;

type SidebarProps = {
  sidebarState: boolean;
};

export const Sidebar = ({ sidebarState }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateGuild } = useContext(GuildContext);

  return (
    <SidebarBase sidebarState={sidebarState}>
      <NavSidebarItem>
        <FaHammer className="icon" size={18} />
        <span>Moderation</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaTag className="icon" size={18} />
        <span>Tags</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaUsers className="icon" size={18} />
        <span>Permissions</span>
      </NavSidebarItem>
      <NavSidebarItem>
        <FaCog className="icon" size={18} />
        <span>Settings</span>
      </NavSidebarItem>
      <NavSidebarItem
        onClick={() => {
          updateGuild(undefined);
          navigate('/dashboard', { state: { from: location } });
        }}
      >
        <FaAngleDoubleLeft className="icon" size={18} />
        <span>Return to Dashboard</span>
      </NavSidebarItem>
    </SidebarBase>
  );
};
