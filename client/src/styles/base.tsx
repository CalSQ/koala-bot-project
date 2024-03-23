import styled from 'styled-components';
import { Button } from 'react-aria-components';

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

export const MainButton = styled(Button)<{
  $slim?: boolean;
  $warning?: boolean;
}>`
  height: ${(props) => (props.$slim ? '80px' : '200px')};
  width: 200px;
  min-width: 200px;
  background-color: #111113;
  border: 1px solid #212121;
  border-radius: 15px;

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
    border-color: #fff;
    color: #fff;
  }

  &[data-focus-visible] {
    outline: 2px solid #bbbbbb88;
    outline-offset: -1px;
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
`;
