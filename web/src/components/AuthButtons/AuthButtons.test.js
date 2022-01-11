import { render } from '@redwoodjs/testing/web'

import AuthButtons from './AuthButtons'

describe('AuthButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthButtons />)
    }).not.toThrow()
  })
})
