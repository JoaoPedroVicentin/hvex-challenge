import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;

  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #252835;
  padding: 0 5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;

    ul {
      display: flex;
      gap: 3rem;
      list-style: none;

      @media (max-width: 1024px) {
        gap: 1.5rem;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem 2.5rem;
  }

  @media (max-width: 445px) {
    padding: 1rem;
  }
`

export const NavigationButton = styled.a`
  color: ${(props) => props.theme.whiteLight};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const IconButton = styled.button`
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${(props) => props.theme.whiteLight};

  @media (max-width: 768px) {
    display: flex;
  }
`
export const DropdownMenuContent = styled(DropdownMenu.Content)`
  display: none;
  z-index: 10;

  background-color: #252835;
  margin-top: 1.55rem;
  color: ${(props) => props.theme.whiteLight};
  padding: 1.25rem 1rem 2rem;
  border: 1px solid ${(props) => props.theme.grayDark};
  width: 13rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    display: flex;
  }
`
