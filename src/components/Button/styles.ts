import styled from 'styled-components'

export const ButtonContainer = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 5px;
  padding: 0.75rem 1.5rem;

  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.whiteLight};
  }
`
