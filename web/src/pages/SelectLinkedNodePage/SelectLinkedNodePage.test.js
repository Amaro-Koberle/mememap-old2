import { render } from '@redwoodjs/testing/web'

import SelectLinkedNodePage from './SelectLinkedNodePage'

describe('SelectLinkedNodePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelectLinkedNodePage />)
    }).not.toThrow()
  })
})
