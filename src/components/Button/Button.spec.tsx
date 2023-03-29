import { render } from '@testing-library/react'
import { Button } from '.'

test('button renders correctly', () => {
  const { debug } = render(<Button content="" />)

  debug()
})
