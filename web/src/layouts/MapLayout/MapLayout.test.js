import { render } from '@redwoodjs/testing/web'

import MapLayout from './MapLayout'

describe('MapLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapLayout />)
    }).not.toThrow()
  })
})
