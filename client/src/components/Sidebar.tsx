import { FaCog, FaHammer, FaTag, FaUsers } from 'react-icons/fa';
import styled from 'styled-components';
import { SidebarButton } from '../styles/base';

const SidebarBase = styled.div`
  position: sticky;
  top: 3.75rem;
  background-color: #131315;
  border-right: 1px solid #6a6a6a;
  height: calc(100vh - 3.75rem);
  width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 1;
  /* resize: horizontal; */
`;

export const Sidebar = () => {
  return (
    <SidebarBase>
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
    </SidebarBase>
  );
};
