import { render } from '@redwoodjs/testing/web'

import SelectLinkedNode from './SelectLinkedNode'

describe('SelectLinkedNode', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelectLinkedNode />)
    }).not.toThrow()
  })
})
