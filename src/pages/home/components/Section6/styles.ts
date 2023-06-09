import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.gray};
  color: ${(props) => props.theme.white};

  padding: 5rem;

  div {
    max-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    margin: 0 auto;

    text-align: center;

    h2 {
      position: relative;

      &::after {
        content: '';

        height: 0.25rem;

        background-color: ${(props) => props.theme.blue};

        bottom: 0;
        left: 0;
        right: 0;

        margin: 0 30%;
        margin-bottom: -2rem;

        position: absolute;

        @media (max-width: 595px) {
          margin-bottom: -1.5rem;
        }
      }

      @media (max-width: 595px) {
        font-size: 1.5rem;
      }

      @media (max-width: 425px) {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 595px) {
      gap: 3rem;
    }
  }

  @media (max-width: 445px) {
    padding: 2.5rem 1rem;
  }
`
