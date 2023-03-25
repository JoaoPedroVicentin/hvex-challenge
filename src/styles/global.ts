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
    body {
        
    }
    button: {
        cursor: pointer;
    }
    body, button {
        font-family: 'Inter', sans-serif;
    }
`
