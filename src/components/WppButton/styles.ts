import styled from 'styled-components'

export const WppButtonContainer = styled.a`
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};

  position: fixed;

  z-index: 12;

  right: 0;
  bottom: 0;

  margin-right: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;

    padding: 0.5rem;
  }
`
