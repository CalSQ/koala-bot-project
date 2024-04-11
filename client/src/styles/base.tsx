import styled from 'styled-components';
import { Button, ListBoxItem, Popover, Select } from 'react-aria-components';

export const PageContentDivision = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 3.75rem);

  main {
    flex: 1;
  }
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

export const MainGuildContent = styled.main`
  display: flex;
  flex-direction: row;
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

// Section Styled Components

export const SectionHeading = styled.h1`
  font-size: 1.05rem;
  font-weight: 500;
`;

export const Seperator = styled.div`
  background-color: #2f2f2f;
  width: 100%;
  height: 1px;
  position: relative;
  bottom: 10px;
`;

export const SectionMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 15px;

  & > * {
    flex-grow: 1;
  }
`;

export const GuildPageBase = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Sidebar = styled.div`
  background-color: #131315;
  border-right: 1px solid #6a6a6a;
  height: calc(100vh - 3.75rem);
  width: 250px;

  @media (orientation: portrait) {
    position: fixed;
    width: 100vw;
  }
`;

// Aria Components

export const MainButton = styled(Button)<{
  $slim?: boolean;
  $warning?: boolean;
  $notification?: number;
  $link?: boolean;
}>`
  height: ${(props) => (props.$slim ? '80px' : '200px')};
  width: 200px;
  min-width: 200px;
  background-color: #111113;
  border: 1px solid #212121;
  border-radius: 10px;

  display: flex;
  flex-direction: ${(props) => (props.$slim ? 'row' : 'column')};
  gap: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  transition: background-color 250ms, color 250ms;
  color: ${(props) => (props.$warning ? '#723E3E' : '#858585')};
  padding-inline: 15px;

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

  img {
    width: auto;
    height: ${(props) => (props.$slim ? '25px' : '70px')};
  }

  .icon {
    width: auto;
    height: ${(props) => (props.$slim ? '25px' : '40px')};
  }

  p {
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0;
  }

  ${(props) =>
    props.$notification && {
      position: 'relative',
      '&::after': {
        content: `"${props.$notification}"`,
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
    props.$link && {
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

  & > *:first-child {
    flex-grow: 1;
    text-align: left;
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
`;
