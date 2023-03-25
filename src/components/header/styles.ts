import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const HeaderContainer = styled.header`
  background-color: #252835;
  padding: 1rem 5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
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
`

export const NavigationButton = styled.a`
  color: ${(props) => props.theme.white};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`

export const NavigationButtonPurchase = styled(NavigationButton)`
  color: ${(props) => props.theme.blue};
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 5px;
  padding: 0.75rem 1.5rem;

  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
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
  color: ${(props) => props.theme.white};

  @media (max-width: 768px) {
    display: flex;
  }
`
export const DropdownMenuContent = styled(DropdownMenu.Content)`
  display: none;

  background-color: #252835;
  margin-top: 1.4rem;
  color: ${(props) => props.theme.white};
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.grayDark};
  width: 15rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    display: flex;
  }
`
