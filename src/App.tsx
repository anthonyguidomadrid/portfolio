import { useState, useEffect, useCallback } from 'react'
import MoonLoader from 'react-spinners/ClipLoader'
import { contentfulNormalizer } from './normalizer/contentfulNormalizer'
import { graphQlQuery } from './graphQL/contentfulQuery'
import { AppRoutes } from './routes/AppRoutes'
import { locales } from './config/locales'
import { capitalizeCountryFromLocale } from './helpers/transformLocale'
import { PageContent } from '~types/normalizedContentTypes'
import ReactGA from 'react-ga4'

function App() {
  const [pageContent, setPageContent] = useState<
    PageContent | Record<string, never>
  >({})
  const [locale, setLocale] = useState<string | undefined>(undefined)

  const fetchContent = useCallback(async () => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          query: graphQlQuery(capitalizeCountryFromLocale(locale))
        })
      }
    )
      .then(async response => {
        const data = await response.json()
        setPageContent(contentfulNormalizer(data, locale))
      })
      .catch(error => console.log('There was an error:', error))
  }, [locale])

  useEffect(() => {
    fetchContent()
  }, [fetchContent])

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID ?? '')
  }, [])

  useEffect(() => {
    if (locale && !Object.keys(locales).find(key => locales[key] === locale)) {
      window.location.href = locale ? `${locale}/404` : '/404'
    }
  }, [locale])

  if (Object.keys(pageContent).length === 0) {
    return (
      <div className="grid place-items-center h-screen">
        <MoonLoader size={120} />
      </div>
    )
  }

  return (
    <AppRoutes
      pageContent={pageContent}
      locale={locale}
      setLocale={setLocale}
    />
  )
}

export default App
