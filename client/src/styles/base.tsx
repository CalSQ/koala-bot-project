import styled from 'styled-components';
import { Button, ListBoxItem, Popover, Select } from 'react-aria-components';

export const PageContentDivision = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 3.75rem);
  width: 100%;

  background-size: 20px 20px;
  background-image: linear-gradient(to right, #131315 1px, transparent 1px),
    linear-gradient(to bottom, #131315 1px, transparent 1px);
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  font-weight: 600;
  padding: 25px 25px;
  flex-grow: 1;
`;

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:link {
    color: '#FFF';
  }

  &:visited {
    color: '#916DAD';
  }
`;

type SidebarProps = {
  sidebarState: boolean;
};

export const SidebarBase = styled.div<SidebarProps>`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > :first-child {
    display: ${(props) => (props.sidebarState ? 'flex' : 'none')};
  }

  @media (max-width: 800px) {
    & > :first-child {
      position: fixed;
      width: 100vw;
    }

    & > :last-child {
      display: ${(props) => (props.sidebarState ? 'none' : 'flex')};
    }
  }
`;

// Section Styled Components

export const SectionBase = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > header {
    & > h1 {
      font-size: 1.05rem;
      font-weight: 500;
    }

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: #2f2f2f;
      position: relative;
      bottom: 10px;
    }
  }
`;

export const SectionMain = styled.main<{ row?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 16px;

  & > * {
    flex-grow: 1;
  }
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

// Aria Buttons

export const IconButton = styled(Button)`
  background: none;
  border: none;
  outline: none;
  aspect-ratio: 1;
  cursor: pointer;

  color: #bbbbbb;

  display: flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    color: #fff;
  }

  &[data-focus-visible] {
    border: 2px solid #bbbbbb88;
    border-radius: 5px;
  }
`;

type ButtonBaseProps = {
  notification?: number;
  overlay?: boolean;
  warning?: boolean;
};
export const ButtonBase = styled(Button)<ButtonBaseProps>`
  width: 200px;
  min-width: 200px;
  background-color: #111113;
  border: 1px solid #212121;
  border-radius: 10px;
  height: 50px;
  margin: 0;
  padding-inline: 25px;

  color: ${(props) => (props.warning ? '#723E3E' : '#858585')};
  font-weight: 500;
  font-size: 0.85rem;
  overflow: auto;

  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  cursor: pointer;
  outline: none;
  transition: background-color 250ms, color 250ms;

  p {
    width: 85%;
    margin: 0;
    font-weight: 600;
    text-align: center;
    line-height: 25px;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    overflow: hidden;
  }

  &[data-pressed] {
    background-color: #212121;
    border-color: #ffffff88;
    color: #fff;
  }

  &[data-focus-visible] {
    outline: 2px solid #bbbbbb88;
    outline-offset: -1px;
  }

  &[data-disabled] {
    border-color: #723e3e88;
    cursor: not-allowed;
  }

  ${(props) =>
    props.notification && {
      position: 'relative',
      '&::after': {
        content: `"${props.notification}"`,
        fontWeight: '500',
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        width: '20px',
        aspectRatio: '1',
        borderRadius: '50%',
        backgroundColor: '#723E3E',
        color: '#fff',
      },
    }}

  ${(props) =>
    props.overlay && {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#00000080',
        borderRadius: '10px',
      },
    }}
`;

export const GuildButton = styled(ButtonBase)`
  flex-direction: column;
  height: 200px;

  img {
    width: auto;
    height: 70px;
  }
`;

export const MiscButton = styled(ButtonBase)`
  height: 75px;

  & > :first-child {
    width: auto;
    height: 25px;
  }
`;

export const ContentButton = styled(ButtonBase)`
  min-width: initial;
  max-width: fit-content;
  padding-inline: 25px;

  & > p {
    width: auto;
    height: 25px;
  }
`;

export const SidebarButton = styled(ButtonBase)`
  height: 60px;
  width: 100%;
  justify-content: left;
  padding-left: 1.5rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #212121;
`;

// Aria SelectMenus

export const SelectMenu = styled(Select)`
  font-size: 0.85rem;
  font-weight: 500;
`;

export const SelectPopover = styled(Popover)`
  background-color: #111113;
  border: 1px solid #212121;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 #00000088;
  color: #858585;
  max-height: 300px;
  overflow-y: auto;
  width: 200px;

  & > * {
    display: flex;
    flex-direction: column;
    gap: 5px;
    outline: none;
    border: none;
  }
`;

export const SelectListItem = styled(ListBoxItem)`
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;

  &[data-selected] {
    color: #fff;
    cursor: default;
  }

  &[data-focus-visible] {
    border: 2px solid #bbbbbb88;
    border-radius: 10px;
  }

  &:hover {
    background-color: #212121;
  }
`;

export const SelectButton = styled(Button)`
  height: 50px;
  width: 200px;
  min-width: 200px;
  background-color: #111113;
  border: 1px solid #212121;
  color: #858585;
  padding-inline: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 15px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;

  & > .open-icon {
    display: none;
  }

  & > *:first-child {
    flex-grow: 1;
    text-align: left;
  }

  &[data-pressed] {
    background-color: #212121;
    border-color: #ffffff88;
    color: #fff;

    & > .open-icon {
      display: inline;
    }

    & > .closed-icon {
      display: none;
    }
  }

  &[data-focus-visible] {
    outline: 2px solid #bbbbbb88;
    outline-offset: -1px;
  }
`;
