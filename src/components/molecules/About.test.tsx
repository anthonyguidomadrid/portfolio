import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { aboutMock } from '../../__mocks__/NormalizedContent'
import { About, AboutProps } from './About'

describe(About, () => {
  const setup = (
    props: AboutProps = {
      aboutContent: aboutMock,
      locale: 'es-es'
    }
  ) => {
    render(<About {...props} />)
  }

  it('renders the About component', () => {
    setup()
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('sets a different subtitle every 3 seconds', async () => {
    setup()
    expect(screen.getByTestId('about-subtitle')).toHaveTextContent('Subtitle 1')
    await new Promise(r => setTimeout(r, 3200))
    expect(screen.getByTestId('about-subtitle')).toHaveTextContent('Subtitle 2')
  })

  it('displays to the first subtitle after displaying all the subtitles in the array', async () => {
    setup({
      aboutContent: { ...aboutMock, subtitle: ['Subtitle 1'] },
      locale: 'es-es'
    })
    expect(screen.getByTestId('about-subtitle')).toHaveTextContent('Subtitle 1')
    await new Promise(r => setTimeout(r, 3200))
    expect(screen.getByTestId('about-subtitle')).toHaveTextContent('Subtitle 1')
  })
})
