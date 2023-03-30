import styled from 'styled-components'

export const ButtonContainer = styled.a`
  color: ${(props) => props.theme.blue};

  padding: 0.75rem 1.5rem;

  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 5px;
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.whiteLight};
  }
`
