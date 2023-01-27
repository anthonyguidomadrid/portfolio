import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { headerMock, menuItemsMock } from '../../__mocks__/NormalizedContent'
import { Header, HeaderProps } from './Header'

describe(Header, () => {
  const setup = (
    props: HeaderProps = {
      headerContent: headerMock,
      locale: 'es-es'
    }
  ) => {
    render(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>
    )
  }

  it('renders the Header component', () => {
    setup()
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('displays a different CTA link if no locale is sent', () => {
    setup({
      headerContent: headerMock,
      locale: undefined
    })
    expect(screen.getByTestId('header')).toContainHTML('/cta-link')
  })

  it('displays a link to the project section is displayBackBtn property is true', () => {
    setup({
      headerContent: headerMock,
      locale: undefined,
      displayBackBtn: true,
      menuItems: menuItemsMock
    })
    expect(screen.getByTestId('header')).toContainHTML('/#projects')
  })

  it('displays a different link to the project section if a locale is sent', () => {
    setup({
      headerContent: headerMock,
      locale: 'es-es',
      displayBackBtn: true,
      menuItems: menuItemsMock
    })
    expect(screen.getByTestId('header')).toContainHTML('/es-es/#projects')
  })

  it('sets different background properties on mobile', () => {
    const resizeWindow = (x: number, y: number) => {
      window.innerWidth = x
      window.innerHeight = y
      act(() => {
        window.dispatchEvent(new Event('resize'))
      })
    }
    setup()
    expect(screen.getByTestId('header')).toContainHTML(
      'background-attachment: fixed'
    )
    resizeWindow(390, 844)
    expect(screen.getByTestId('header')).toContainHTML(
      'background-attachment: scroll'
    )
  })
})
