import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
    }
    h1{
      font-size: 3rem;
      font-weight: 700;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    h3{
        font-size: 1.5rem;
        font-weight: 700;
    }
    h4{
        font-size: 1.25rem;
        font-weight: 400;
    }
    h5{
        font-size: 1rem;
        font-weight: 400;
    }
    body{
        background-color: #fdfdfd;
        font-family: Inter, sans-serif;
    }
    button{
        cursor: pointer;
    }
`
