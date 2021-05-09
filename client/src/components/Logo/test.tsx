import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Logo from './index'

describe('<Logo />', () => {
  it('Should render a white label by default ', () => {
    // Render o component 'render'
    // Selecionar o elemento a ser testado 'screen' (queries) = getByLabel
    //Expect - assertion - asserção - comparação - análise( espero que renderize a logo branca)
    // Enzime faz shallow - ou seja - não renderiza de fato

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
