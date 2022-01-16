import { render } from '@redwoodjs/testing/web'

import CreateLinkDialog from './CreateLinkDialog'

describe('CreateLinkDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateLinkDialog />)
    }).not.toThrow()
  })
})
