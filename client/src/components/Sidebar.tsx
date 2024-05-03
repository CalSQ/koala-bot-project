import {
  FaCog,
  FaCube,
  FaDatabase,
  FaHammer,
  FaTag,
  FaUsers,
} from 'react-icons/fa';
import styled from 'styled-components';
import { SidebarButton } from '../styles/base';
import { useNavigate } from 'react-router-dom';

const SidebarBase = styled.div`
  position: sticky;
  top: 3.75rem;
  background-color: #131315;
  border-right: 1px solid #6a6a6a;
  height: calc(100vh - 3.75rem);
  /* height: 100%; */
  width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 1;
  /* resize: horizontal; */
`;

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleItemPress = (location: string) => {
    navigate(`/dashboard/guild/${location}`);
  };

  return (
    <SidebarBase>
      <SidebarButton onPress={() => handleItemPress('general')}>
        <FaCube className="icon" size={18} />
        <span>General</span>
      </SidebarButton>
      <SidebarButton onPress={() => handleItemPress('moderation')}>
        <FaHammer className="icon" size={18} />
        <span>Moderation</span>
      </SidebarButton>
      <SidebarButton onPress={() => handleItemPress('tags')}>
        <FaTag className="icon" size={18} />
        <span>Tags</span>
      </SidebarButton>
      <SidebarButton onPress={() => handleItemPress('permissions')}>
        <FaUsers className="icon" size={18} />
        <span>Permissions</span>
      </SidebarButton>
      <SidebarButton onPress={() => handleItemPress('settings')}>
        <FaCog className="icon" size={18} />
        <span>Settings</span>
      </SidebarButton>
      <SidebarButton onPress={() => handleItemPress('data')}>
        <FaDatabase className="icon" size={18} />
        <span>Data</span>
      </SidebarButton>
    </SidebarBase>
  );
};
