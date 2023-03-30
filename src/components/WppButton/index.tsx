import { WppButtonContainer } from './styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

// Componente botão do Whatsapp

export function WppButton() {
  return (
    <WppButtonContainer href="/" title="whatsapp">
      <WhatsAppIcon fontSize="large" />
    </WppButtonContainer>
  )
}
