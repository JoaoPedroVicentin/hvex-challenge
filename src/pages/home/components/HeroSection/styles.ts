import styled from 'styled-components'

export const HeroContainer = styled.section`
  background-color: ${(props) => props.theme.grayDark};
  color: ${(props) => props.theme.whiteLight};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 6rem;
  padding: 0 5rem;

  section {
    max-width: 1440px;

    display: grid;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 975px) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  @media (min-width: 975px) {
    height: calc(100vh - 6rem);
    max-height: 935px;
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
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  margin-right: -15%;

  a {
    width: 15rem;

    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.whiteLight};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;

    text-decoration: none;
    border: 1px solid ${(props) => props.theme.blue};
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

  @media (max-width: 975px) {
    margin: 0;
    padding: 0;
  }
`
export const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    @media (min-width: 975px) {
      height: calc(100vh - 4rem);
      width: auto;
      max-height: 935px;
    }

    @media (max-width: 975px) {
      width: 50%;
      height: auto;
    }
  }
`
