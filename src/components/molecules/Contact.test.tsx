import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  contactMock,
  translationsMock
} from '../../__mocks__/NormalizedContent'
import { Contact, ContactProps } from './Contact'

describe(Contact, () => {
  const setup = (
    props: ContactProps = {
      contactContent: contactMock,
      translations: translationsMock
    }
  ) => {
    render(<Contact {...props} />)
  }

  it('renders the Contact component', () => {
    setup()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('disable the submit button once all the fields have been completed', () => {
    setup()
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeDisabled()
    const nameInput = screen.getByTestId('name-input')
    const emailInput = screen.getByTestId('email-input')
    const subjectInput = screen.getByTestId('subject-input')
    const textInput = screen.getByTestId('text-input')
    fireEvent.change(nameInput, { target: { value: 'Name' } })
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } })
    fireEvent.change(subjectInput, { target: { value: 'Subject' } })
    fireEvent.change(textInput, { target: { value: 'Message' } })
    expect(submitButton).not.toBeDisabled()
  })
})
