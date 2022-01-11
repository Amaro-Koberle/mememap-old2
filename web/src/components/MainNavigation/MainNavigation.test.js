import { render } from '@redwoodjs/testing/web'

import MainNavigation from './MainNavigation'

describe('MainNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainNavigation />)
    }).not.toThrow()
  })
})
