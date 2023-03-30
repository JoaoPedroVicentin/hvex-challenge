import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Importando variáveis de estilo
    <ThemeProvider theme={defaultTheme}>
      {/* Renderizando estilos globais da aplicação */}
      <GlobalStyle />
      {/* Configurando SEO da aplicação */}
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.ignite-call.rocketseat.com.br',
          siteName: 'Hvex | Omni Trafo',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
