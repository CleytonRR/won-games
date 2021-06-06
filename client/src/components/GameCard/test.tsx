import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import GameCard from './index'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('Should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('Should render price in label', () => {
    // renderize o component

    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('Should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} price="200" promotionalPrice="15" />)

    expect(screen.getByText('200')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('15')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
