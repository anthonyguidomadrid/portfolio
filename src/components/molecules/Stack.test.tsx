import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { stackMock } from '../../__mocks__/NormalizedContent'
import { Stack, StackProps } from './Stack'

describe(Stack, () => {
  const setup = (
    props: StackProps = {
      stackContent: stackMock
    }
  ) => {
    render(<Stack {...props} />)
  }

  it('renders the Project Slider component', () => {
    setup()
    expect(screen.getByTestId('stack')).toBeInTheDocument()
  })
})
