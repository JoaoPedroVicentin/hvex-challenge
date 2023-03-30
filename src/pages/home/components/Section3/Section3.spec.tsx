import { render, screen } from '@testing-library/react'
import { Section3 } from '.'

jest.mock('aos/dist/aos.css', () => {
  return {
    Aos() {
      return [null, false]
    },
  }
})

describe('Section3', () => {
  it('renders correctly', () => {
    render(<Section3 />)

    expect(screen.getByText('OMNI TRAFO')).toBeInTheDocument()
  })
})
