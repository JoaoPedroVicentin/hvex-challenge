import {
  Address,
  Contact,
  FooterBottom,
  FooterContainer,
  InfosDiv,
  SocialMedia,
} from './styles'

import logo from '../../assets/logo-hvex.svg'
import Image from 'next/image'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'

export function Footer() {
  return (
    <FooterContainer>
      <footer>
        <InfosDiv>
          <Link href="https://hvex.com.br/" target="_blank">
            <Image src={logo} width={115} alt="Logo Hvex" />
          </Link>
          <Address>
            <h4>Endereço</h4>
            <h5>
              R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá -
              MG, 37502-508
            </h5>
          </Address>
          <Contact>
            <h4>Contato</h4>
            <h5>(35) 3622-2699</h5>
            <h5>contato@hvex.com.br</h5>
          </Contact>
          <SocialMedia>
            <h4>Confira nossas redes</h4>

            <div>
              <Link
                href="https://www.linkedin.com/company/hvexoficial/"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <Link href="https://www.facebook.com/HVEX.MG" target="_blank">
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.instagram.com/hvex_oficial/"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCK5Z6eCnlYHVkHijYzb1Iow"
                target="_blank"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </SocialMedia>
        </InfosDiv>
        <FooterBottom>
          <h5>HVEX © 2021 | Todos os direitos reservados.</h5>
          <span></span>
          <h5>Políticas de Privacidade</h5>
          <h5>Termos de Uso</h5>
        </FooterBottom>
      </footer>
    </FooterContainer>
  )
}
