import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { projectsMock } from '../../__mocks__/NormalizedContent'
import { MobileSubMenu, MobileSubMenuProps } from './MobileSubmenu'

describe(MobileSubMenu, () => {
  const setMenuOpen = jest.fn()
  const setIsSubMenuOpen = jest.fn()
  const setup = (
    props: MobileSubMenuProps = {
      projectsContent: projectsMock,
      locale: 'es-es',
      isSubMenuOpen: true,
      setMenuOpen: setMenuOpen,
      setIsSubMenuOpen: setIsSubMenuOpen
    }
  ) => {
    render(
      <BrowserRouter>
        <MobileSubMenu {...props} />
      </BrowserRouter>
    )
  }

  it('renders the mobile submenu component', () => {
    setup()
    expect(screen.getByTestId('mobile-submenu')).toBeInTheDocument()
  })

  it('fires the setMenuOpen and setIsSubMenuOpen functions while clicking on any link', () => {
    setup()
    fireEvent.click(screen.getByText('Project 1'))
    expect(setMenuOpen).toBeCalledTimes(1)
    expect(setIsSubMenuOpen).toBeCalledTimes(1)
  })

  it('does not render any link is the menu is not open', () => {
    setup({
      projectsContent: projectsMock,
      locale: 'es-es',
      isSubMenuOpen: false,
      setMenuOpen: setMenuOpen,
      setIsSubMenuOpen: setIsSubMenuOpen
    })
    expect(screen.queryByTestId('mobile-submenu-link')).not.toBeInTheDocument()
  })

  it('displays the correct link if no locale is sent', () => {
    setup({
      projectsContent: projectsMock,
      locale: undefined,
      isSubMenuOpen: true,
      setMenuOpen: setMenuOpen,
      setIsSubMenuOpen: setIsSubMenuOpen
    })
    expect(screen.getByText('Project 1')).toContainHTML(
      '/projects/project1#top'
    )
  })
})
