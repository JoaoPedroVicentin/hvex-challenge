import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { WppButton } from '../components/WppButton'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
      <Footer />
      <WppButton />
    </ThemeProvider>
  )
}
