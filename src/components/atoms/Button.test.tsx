import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button, ButtonProps } from './Button'

describe(Button, () => {
  const setup = (props: ButtonProps = { text: 'Hello', link: '/' }) => {
    render(<Button {...props} />)
  }

  it('renders the button component', () => {
    setup()
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })

  it('changes the link target depending of the newTab prop', () => {
    setup({ text: 'Hello', link: '/', newTab: true })
    expect(screen.getByTestId('button')).toContainHTML('target="_blank"')
  })
})
