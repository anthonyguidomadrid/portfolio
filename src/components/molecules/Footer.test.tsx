import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  logoMock,
  menuItemsMock,
  socialMediasMock
} from '../../__mocks__/NormalizedContent'
import { Footer, FooterProps } from './Footer'

describe(Footer, () => {
  const setup = (
    props: FooterProps = {
      logo: logoMock,
      footerItems: menuItemsMock,
      socialMedia: socialMediasMock,
      locale: 'es-es'
    }
  ) => {
    render(
      <BrowserRouter>
        <Footer {...props} />
      </BrowserRouter>
    )
  }

  it('renders the footer component', () => {
    setup()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('displays a different link if no locale is sent', () => {
    setup({
      logo: logoMock,
      footerItems: menuItemsMock,
      socialMedia: socialMediasMock,
      locale: undefined
    })
    expect(screen.getByTestId('footer')).toContainHTML('/#top')
  })
})
