import styled from 'styled-components'

export const HeroContainer = styled.section`
  background-color: ${(props) => props.theme.grayDark};
  color: ${(props) => props.theme.white};

  margin-top: 6rem;
  padding: 0 5rem;

  section {
    max-width: 1440px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    @media (max-width: 835px) {
      flex-direction: column;
      gap: 5rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 445px) {
    padding: 2.5rem 1.5rem;
  }
`
export const InfosColumn = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-right: -5rem;

  a {
    width: 15rem;

    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;

    text-decoration: none;
    border-radius: 5px;
    padding: 0.75rem 1rem;

    @media (max-width: 620px) {
      margin-top: 0;
      width: auto;
    }
  }

  h1 {
    @media (max-width: 620px) {
      font-size: 2rem;
    }

    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    @media (max-width: 620px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 1160px) {
    margin-right: -20rem;
  }

  @media (max-width: 835px) {
    margin: 0;
  }
`
export const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: -2rem 0;

  img {
    @media (max-width: 1400px) {
      height: 40rem;
      width: auto;
    }

    @media (max-width: 835px) {
      height: 30rem;
    }

    @media (max-width: 620px) {
      height: 25rem;
    }

    @media (max-width: 375px) {
      height: 20rem;
    }
  }

  @media (max-width: 835px) {
    margin: 0;
  }
`
