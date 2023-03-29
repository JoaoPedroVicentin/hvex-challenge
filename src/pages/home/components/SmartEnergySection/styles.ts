import styled from 'styled-components'

export const SmartEnergyContainer = styled.section`
  padding: 7rem 5rem;
  background-color: ${(props) => props.theme.whiteLight};

  position: relative;
  z-index: 2;

  section {
    max-width: 1440px;

    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;

    margin: 0 auto;

    @media (max-width: 1210px) {
      gap: 2.5rem;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    @media (max-width: 445px) {
      gap: 2.5rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 2.5rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem;
  }

  @media (max-width: 445px) {
    padding: 2.5rem 1rem;
  }
`

export const InfosColumn = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 3rem;

  h2 {
    color: #115678;
  }

  h4 {
    line-height: 155%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;

    li {
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
        background-color: ${(props) => props.theme.blueDark};
        color: ${(props) => props.theme.whiteLight};

        display: flex;
        align-items: center;
        justify-content: center;

        width: 1.5rem;
        height: 1.5rem;
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

    @media (max-width: 550px) {
      gap: 1.25rem;
    }
  }

  @media (max-width: 900px) {
    grid-row: 1;
    gap: 2rem;
  }

  @media (max-width: 445px) {
    h2 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`

export const ImageColumn = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 90%;
    height: auto;

    @media (max-width: 900px) {
      margin: 0 auto;
      width: 75%;
    }
  }
`
