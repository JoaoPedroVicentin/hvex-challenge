import styled from 'styled-components'

export const AboutOmniContainer = styled.section`
  padding: 7rem 5rem;

  section {
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;

    @media (max-width: 900px) {
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

export const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;

    @media (max-width: 900px) {
      width: 50%;
    }
  }
`

export const AboutOmniColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;

  h2 {
    color: ${(props) => props.theme.grayDark};

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

  @media (max-width: 900px) {
    grid-row: 1;
  }
`

export const Title = styled.div`
  color: ${(props) => props.theme.grayDark};
  position: relative;

  &::after {
    content: '';
    background-color: ${(props) => props.theme.blue};
    width: 11rem;
    height: 0.25rem;

    bottom: 0;
    margin-bottom: -1rem;
    position: absolute;
  }
`

export const InfosOmni = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;

    gap: 1rem;

    text-align: center;

    span {
      background-color: ${(props) => props.theme.grayDark};

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      img {
        width: 100%;
        aspect-ratio: 1/1;
      }

      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-15%);
      }
    }

    h5 {
      font-size: 0.85rem;
      font-weight: 700;
    }
  }

  @media (max-width: 525px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 0.5rem;
  }
`
