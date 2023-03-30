import styled, { keyframes } from 'styled-components'
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

  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.blue};
    filter: brightness(1.2);
  }

  &[aria-checked='true'] {
    color: ${(props) => props.theme.blue};
    filter: brightness(1.2);
  }
`

const slideUpAndFade = keyframes`
  0% { opacity: 0; transform: translateY(2px) }
  100% { opacity: 1; transform: translateY(0) }
`

const slideRightAndFade = keyframes`
  0% { opacity: 0; transform: translateX(-2px) }
  100% { opacity: 1; transform: translateX(0) }
`

const slideDownAndFade = keyframes`
  0% { opacity: 0; transform: translateY(-2px) }
  100% { opacity: 1; transform: translateY(0) }
`

const slideLeftAndFade = keyframes`
  0% { opacity: 0; transform: translateX(2px) }
  100% { opacity: 1; transform: translateX(0) }
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
  background-color: #252835;
  color: ${(props) => props.theme.whiteLight};

  width: 100vw;

  display: none;
  flex-direction: column;

  justify-content: center;
  gap: 2rem;

  z-index: 10;

  margin-top: 1.55rem;
  padding: 1.25rem 2.5rem 2rem;

  border: 1px solid ${(props) => props.theme.grayDark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  animation-duration: 500ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side='right'] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side='left'] {
      animation-name: ${slideRightAndFade};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 445px) {
    padding: 1.25rem 1rem 2rem;
  }
`
