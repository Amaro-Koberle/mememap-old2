import { render } from '@redwoodjs/testing/web'

import ExplorePage from './ExplorePage'

describe('ExplorePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExplorePage />)
    }).not.toThrow()
  })
})
