import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${(props) => props.theme.white};

  padding: 2rem 5rem;

  section {
    max-width: 1440px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    margin: 0 auto;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 445px) {
    padding: 2rem 1rem;
  }
`

export const InfosColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  h2 {
    position: relative;

    &::after {
      content: '';

      width: 11rem;
      height: 0.25rem;

      background-color: ${(props) => props.theme.blue};

      left: 0;
      bottom: 0;

      position: absolute;

      margin-bottom: -2rem;

      @media (max-width: 595px) {
        margin-bottom: -1.5rem;
      }
    }

    @media (max-width: 595px) {
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-weight: 700;

      span {
        width: 1.5rem;
        height: 1.5rem;

        background-color: ${(props) => props.theme.grayDark};
        color: ${(props) => props.theme.whiteLight};

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        @media (max-width: 445px) {
          width: 1rem;
          height: 1rem;
        }
      }

      @media (max-width: 445px) {
        font-size: 0.75rem;
        gap: 0.75rem;
      }
    }

    @media (max-width: 445px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 595px) {
    gap: 3rem;
  }
`

export const ImageColumn = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 115%;
    height: auto;

    @media (max-width: 900px) {
      width: 75%;
    }
  }
`
