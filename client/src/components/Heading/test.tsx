import { render, screen } from '@testing-library/react'

import Heading from './index'

describe('<Heading />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Heading />)
    expect(screen.getByRole('heading', { name: /Heading/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
