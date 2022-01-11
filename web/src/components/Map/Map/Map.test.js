import { render } from '@redwoodjs/testing/web'

import Map from './Map'

describe('Map', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Map />)
    }).not.toThrow()
  })
})
