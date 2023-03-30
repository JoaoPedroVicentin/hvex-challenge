import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.gray};

  padding: 2rem 5rem;

  footer {
    max-width: 1440px;
    margin: 0 auto;

    h4 {
      color: ${(props) => props.theme.blue};
      font-weight: 700;
    }
  }
  @media (max-width: 1024px) {
    padding: 2rem 2.5rem;
  }

  @media (max-width: 445px) {
    padding: 2rem 1rem;
  }
`

export const InfosDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5rem;

  margin-bottom: 2rem;

  h5 {
    color: ${(props) => props.theme.whiteLight};
  }

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 515px) {
    grid-template-columns: 1fr;
  }
`
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 425px) {
    gap: 1rem;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 425px) {
    gap: 1rem;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    a {
      width: 3rem;
      height: 3rem;

      background-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.whiteLight};

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }

    @media (max-width: 1215px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem 0;
    }

    @media (max-width: 885px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 515px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (max-width: 425px) {
    gap: 1rem;
  }
`

export const FooterBottom = styled.div`
  display: grid;
  grid-template-columns: 2fr 0 1fr 1fr;
  gap: 5rem;

  padding-top: 2rem;

  border-top: 1px solid ${(props) => props.theme.whiteLight};

  color: ${(props) => props.theme.whiteLight};

  span {
    @media (max-width: 515px) {
      display: none;
    }
  }

  @media (max-width: 1215px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }

  @media (max-width: 515px) {
    grid-template-columns: 1fr;
  }
`
