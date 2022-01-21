import { render } from '@redwoodjs/testing/web'

import PanelNodeLinkPages from './PanelNodeLinkPages'

describe('PanelNodeLinkPages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PanelNodeLinkPages />)
    }).not.toThrow()
  })
})
