import '@testing-library/jest-dom'
import { fireEvent, act, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  logoMock,
  menuItemsMock,
  projectsMock
} from '../../__mocks__/NormalizedContent'
import { Navigation, NavigationProps } from './Navigation'

describe(Navigation, () => {
  const setup = (
    props: NavigationProps = {
      logo: logoMock,
      menuItems: menuItemsMock,
      locale: 'es-es',
      projectsContent: projectsMock
    }
  ) => {
    render(
      <BrowserRouter>
        <Navigation {...props} />
      </BrowserRouter>
    )
  }

  const openMobileMenu = () => {
    const mobileHamburger = screen.getByTestId('mobile-hamburger')
    fireEvent.click(mobileHamburger)
  }

  const openSubmenu = () => {
    const chevronButton = screen.getByTestId('chevron')
    fireEvent.click(chevronButton)
  }

  it('renders the Navigation component', () => {
    setup()
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('renders scroll links on the home page', () => {
    setup()
    const links = screen.getAllByTestId('scroll-link')
    expect(links[0]).toHaveTextContent('About')
  })

  it('sets a different background if the page has been scrolled or not', () => {
    setup()
    document.body.scrollTop = 300
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByTestId('menu')).toContainHTML(
      'bg-slate-900 bg-opacity-80'
    )
    document.body.scrollTop = 0
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByTestId('menu')).not.toHaveClass(
      'bg-slate-900 bg-opacity-80'
    )
  })

  it('closes the mobile menu when clicking on the logo', () => {
    setup()
    openMobileMenu()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500'
    )
    const logo = screen.getByTestId('navigation-logo')
    fireEvent.click(logo)
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500 opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100'
    )
  })

  it('closes the mobile menu when clicking on any link', () => {
    setup()
    openMobileMenu()
    const scrollLinks = screen.getAllByTestId('scroll-link')
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500'
    )
    fireEvent.click(scrollLinks[0])
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500 opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100'
    )
  })

  it('closes the mobile menu when clicking on the cta link', () => {
    setup()
    openMobileMenu()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500'
    )
    const ctaLink = screen.getByTestId('cta-link')
    fireEvent.click(ctaLink)
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500 opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100'
    )
  })

  it('closes the mobile menu when clicking on the language switcher', () => {
    setup()
    openMobileMenu()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500'
    )
    const languageSwitcher = screen.getByTestId('language-switcher')
    fireEvent.click(languageSwitcher)
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500 opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100'
    )
  })

  it('closes the submenu and mobile menu when clicking on any link present into the submenu', () => {
    setup()
    openSubmenu()
    const desktopSubmenu = screen.getByTestId('desktop-submenu')
    expect(desktopSubmenu).toHaveClass('opacity-100 max-h-96 p-5')
    const submenuLinks = screen.getAllByTestId('submenu-link')
    fireEvent.click(submenuLinks[0])
    expect(desktopSubmenu).not.toHaveClass('opacity-100 max-h-96 p-5')
  })
})
