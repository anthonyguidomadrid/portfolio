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
})
