import { render } from '@redwoodjs/testing/web'

import PanelNodePages from './PanelNodePages'

describe('PanelNodePages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PanelNodePages />)
    }).not.toThrow()
  })
})
