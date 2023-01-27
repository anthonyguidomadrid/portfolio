import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { ChevronButton, ChevronButtonProps } from './ChevronButton'

describe(ChevronButton, () => {
  const setIsSubMenuOpen = jest.fn()
  const setup = (
    _props: ChevronButtonProps = {
      isSubMenuOpen: true,
      setIsSubMenuOpen: setIsSubMenuOpen
    }
  ) => {
    render(<ChevronButton {..._props} />)
  }

  it('renders the chevron button component', () => {
    setup()
    expect(screen.getByTestId('chevron')).toBeInTheDocument()
  })

  it('fires the setIsSubMenuOpen function on click', () => {
    setup()
    fireEvent.click(screen.getByTestId('chevron'))
    expect(setIsSubMenuOpen).toBeCalledTimes(1)
  })
})
