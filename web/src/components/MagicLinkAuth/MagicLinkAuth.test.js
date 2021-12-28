import { render } from '@redwoodjs/testing/web'

import MagicLinkAuth from './MagicLinkAuth'

describe('MagicLinkAuth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MagicLinkAuth />)
    }).not.toThrow()
  })
})
