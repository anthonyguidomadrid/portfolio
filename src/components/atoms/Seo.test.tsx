import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Helmet } from 'react-helmet'
import { seoMock } from '../../__mocks__/NormalizedContent'
import { Seo, SeoProps } from './Seo'

describe(Seo, () => {
  const setup = (
    _props: SeoProps = {
      seoPageContent: seoMock
    }
  ) => {
    render(<Seo {..._props} />)
  }

  it('renders the Seo component', () => {
    setup()
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual('Website title')
  })
})
