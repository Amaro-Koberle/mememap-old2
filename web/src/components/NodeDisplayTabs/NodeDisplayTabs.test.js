import { render } from '@redwoodjs/testing/web'

import NodeDisplayTabs from './NodeDisplayTabs'

describe('NodeDisplayTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NodeDisplayTabs />)
    }).not.toThrow()
  })
})
