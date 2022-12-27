import { useState, useEffect, useCallback } from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import "./App.css"
import MoonLoader from "react-spinners/ClipLoader"
import { contentfulNormalizer } from './normalizer/contentfulNormalizer'
import { graphQlQuery } from './graphQL/contentfulQuery'
import { BrowserRouter, Routes, Route } from "react-router-dom"

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
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<h1>Home</h1>} />
          <Route path="/projects/:id" element={<h1>Projects</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App