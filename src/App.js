import { useState, useEffect, useCallback } from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import "./App.css"
import MoonLoader from "react-spinners/ClipLoader"
import { contentfulNormalizer } from './normalizer/contentfulNormalizer'
import { graphQlQuery } from './graphQL/contentfulQuery'

const App = () => {
  const [pageContent, setPageContent] = useState(null)

  const fetchContent = useCallback(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: graphQlQuery }),
      })
      .then(async response => {
        const data = await response.json()
        setPageContent(contentfulNormalizer(data))
    })
    .catch(error => {
        console.error('There was an error!', error);
    })
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
    {console.log('pageContent', pageContent)}
    <div className="App">
      <header className="App-header">
        <img src={pageContent?.page?.logoUrl} className="App-logo" alt="logo" />
        <p>{pageContent?.page?.title}</p>
      </header>
    </div>
    </>
  )
}

export default App