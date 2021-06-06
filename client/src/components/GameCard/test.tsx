import { fireEvent, screen } from '@testing-library/react'
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
    renderWithTheme(
      <GameCard {...props} price="R$ 200" promotionalPrice="R$ 15" />
    )

    expect(screen.getByText('R$ 200')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('Should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('Should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('Should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
