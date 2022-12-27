import { useState, useEffect, useCallback } from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import "./App.css"
import MoonLoader from "react-spinners/ClipLoader"
import { fetchContentfulContent } from './api/contentfulService'
import { contentfulNormalizer } from './normalizer/contentfulNormalizer'
import { AppRoutes } from './routes/AppRoutes'

const App = () => {
  const [pageContent, setPageContent] = useState(null)

  const fetchContent = useCallback(async () => {
    const receivedContent = await fetchContentfulContent()
    setPageContent(contentfulNormalizer(receivedContent))
  }, [])

  useEffect(() => {
    fetchContent()
  }, [fetchContent]);

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
    <HelmetProvider>
      <Helmet>
        <title>{pageContent?.seo?.title}</title>
        <meta
          name="description"
          content={pageContent?.seo?.description}
        />
      </Helmet>
    </HelmetProvider>
      <h1>Nav</h1>
      <AppRoutes />
      <h1>Footer</h1>
    </>
  )
}

export default App