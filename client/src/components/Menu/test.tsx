import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Menu from './index'

describe('<Menu />', () => {
  it('Should render the heading', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })
})
