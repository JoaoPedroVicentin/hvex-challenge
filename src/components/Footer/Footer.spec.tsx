import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Footer />)

    expect(screen.getByText('Endereço')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
    expect(screen.getByText('Confira nossas redes')).toBeInTheDocument()
  })
})
