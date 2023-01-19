import { useState, useEffect, useCallback } from "react"
import MoonLoader from "react-spinners/ClipLoader"
import { contentfulNormalizer } from './normalizer/contentfulNormalizer'
import { graphQlQuery } from './graphQL/contentfulQuery'
import { Seo } from './components/atoms/Seo'
import { AppRoutes } from './routes/AppRoutes'
import ReactGA from 'react-ga'
import { locales } from './config/locales'
import { capitalizeCountryFromLocale } from './helpers/transformLocale'
ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID)

const App = () => {
  const [pageContent, setPageContent] = useState(undefined)
  const [locale, setLocale] = useState(undefined)

  const fetchContent = useCallback(async () => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: graphQlQuery(capitalizeCountryFromLocale(locale)) }),
      })
      .then(async (response) => {
        const data = await response.json()
        setPageContent(contentfulNormalizer(data, locale))
      })
      .catch(error => console.log('There was an error:', error))
  }, [locale])

  useEffect(() => {
    fetchContent()
  }, [fetchContent])

  useEffect(() => {
    if (locale && !Object.keys(locales).find(key => locales[key] === locale)) {
      window.location.href = locale ? `${locale}/404` : '/404'
    }
  }, [locale])

  useEffect(() => {
    ReactGA.pageview(window?.location?.pathname + window?.location?.search);
  }, [])

  if (!pageContent) {
    return (
      <div className="grid place-items-center h-screen">
        <MoonLoader
          size={120}
        />
      </div>
      )
  }

  return (
    <>
      <Seo seoPageContent={pageContent?.seo}/>
      <AppRoutes pageContent={pageContent} setLocale={setLocale} locale={locale}/>
    </>
  )
}

export default App