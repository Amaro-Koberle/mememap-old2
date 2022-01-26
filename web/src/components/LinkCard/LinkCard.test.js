import { render } from '@redwoodjs/testing/web'

import LinkCard from './LinkCard'

describe('LinkCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkCard />)
    }).not.toThrow()
  })
})
