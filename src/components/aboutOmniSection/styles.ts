import styled from 'styled-components'

export const AboutOmniContainer = styled.section`
  padding: 7rem 5rem;

  section {
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
  }
`

export const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`

export const AboutOmniColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;

  h2 {
    color: ${(props) => props.theme.grayDark};
  }
  h4 {
    line-height: 155%;
  }
  span {
    background-color: ${(props) => props.theme.grayDark};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    margin-top: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: baseline;

      gap: 1rem;

      text-align: center;

      h5 {
        font-weight: 700;
      }
    }
  }
`
