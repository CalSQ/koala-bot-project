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
import { SidebarButton } from '../styles/base';

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
  /* resize: horizontal; */

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

type SidebarProps = {
  sidebarState: boolean;
};

export const Sidebar = ({ sidebarState }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateGuild } = useContext(GuildContext);

  return (
    <SidebarBase sidebarState={sidebarState}>
      <SidebarButton>
        <FaHammer className="icon" size={18} />
        <span>Moderation</span>
      </SidebarButton>
      <SidebarButton>
        <FaTag className="icon" size={18} />
        <span>Tags</span>
      </SidebarButton>
      <SidebarButton>
        <FaUsers className="icon" size={18} />
        <span>Permissions</span>
      </SidebarButton>
      <SidebarButton>
        <FaCog className="icon" size={18} />
        <span>Settings</span>
      </SidebarButton>
      <SidebarButton
        onPress={() => {
          updateGuild(undefined);
          navigate('/dashboard', { state: { from: location } });
        }}
      >
        <FaAngleDoubleLeft className="icon" size={18} />
        <span>Return to Dashboard</span>
      </SidebarButton>
    </SidebarBase>
  );
};
