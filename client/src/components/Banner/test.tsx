import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Banner from './index'

describe('<Banner />', () => {
  it('Should render the heading', () => {
    renderWithTheme(
      <Banner
        img="https://souce.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season</p>"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/Defy death/i)).toBeInTheDocument()
  })
})
