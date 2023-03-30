import { render, screen } from '@testing-library/react'
import { Section4 } from '.'

jest.mock('aos/dist/aos.css', () => {
  return {
    Aos() {
      return [null, false]
    },
  }
})

describe('Section4', () => {
  it('renders correctly', () => {
    render(<Section4 />)

    expect(screen.getByText('OMNI TRAFO')).toBeInTheDocument()
  })
})
