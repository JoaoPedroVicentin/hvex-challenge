import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)

    expect(screen.getByText('Omni trafo')).toBeInTheDocument()
    expect(screen.getByText('Sinalizador de faltas')).toBeInTheDocument()
    expect(screen.getByText('Acoplador DP')).toBeInTheDocument()
  })
})
