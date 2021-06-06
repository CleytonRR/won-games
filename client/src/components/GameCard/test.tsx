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

    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })

    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  // it('Should render a line-through in price when promotional', () => {
  //   // renderize o component (com promotionalPrice)

  //   // Preço não tneha line-through
  //   // Preço não tenha o background secundário
  // })
})
