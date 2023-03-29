import styled from 'styled-components'

export const OmniDescriptionContainer = styled.section`
  background-color: ${(props) => props.theme.grayDark};
  color: ${(props) => props.theme.whiteLight};

  padding: 7rem 5rem;

  section {
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media (max-width: 1155px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 2.5rem;
  }

  @media (max-width: 445px) {
    padding: 2.5rem 1rem;
  }
`

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;

  span {
    color: ${(props) => props.theme.blueLight};
  }

  h2 {
    @media (max-width: 595px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    line-height: 155%;

    @media (max-width: 595px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 595px) {
    gap: 1.5rem;
  }
`

export const InfosColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    background-color: ${(props) => props.theme.gray};

    width: 15rem;
    aspect-ratio: 1/1;

    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    border: 2px solid ${(props) => props.theme.blueLight};
    border-radius: 10px;

    text-align: center;

    h3 {
      color: ${(props) => props.theme.blueLight};

      @media (max-width: 595px) {
        font-size: 1rem;
      }

      @media (max-width: 435px) {
        font-size: 1.5rem;
      }
    }

    img {
      @media (max-width: 595px) {
        width: 5rem;
        height: auto;
      }

      @media (max-width: 435px) {
      }
    }

    @media (max-width: 595px) {
      width: 100%;
    }

    @media (max-width: 435px) {
      width: 60%;
    }
  }

  @media (max-width: 1155px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 865px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 435px) {
    grid-template-columns: 1fr;
  }
`
