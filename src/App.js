import { useState, useEffect, useCallback } from "react"
import "./App.css"
import MoonLoader from "react-spinners/ClipLoader"

const query = `
{
  pageCollection {
    items {
      pageTitle
      pageLogo {
        url
      }
    }
  }
}
`;

function App() {
  const [pageContent, setPageContent] = useState(null)

  const fetchContent = useCallback(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      })
      .then(async response => {
        const data = await response.json();
        setPageContent(data?.data?.pageCollection?.items?.[0])
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

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={pageContent.pageLogo.url} className="App-logo" alt="logo" />
        <p>{pageContent.pageTitle}</p>
      </header>
    </div>
  )
}

export default App;