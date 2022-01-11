import { render } from '@redwoodjs/testing/web'

import Panel from './Panel'

describe('Panel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Panel />)
    }).not.toThrow()
  })
})
