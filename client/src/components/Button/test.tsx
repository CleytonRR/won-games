import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Button from './index'

describe('<Button />', () => {
  it('Should render the medium button by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })
})
