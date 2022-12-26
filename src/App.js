import { useState, useEffect, useCallback } from "react";
import "./App.css";

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
  const [page, setPage] = useState(null)

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
        setPage(data?.data?.pageCollection?.items?.[0])
    })
    .catch(error => {
        console.error('There was an error!', error);
    })
  }, [])

  useEffect(() => {
    fetchContent()
  }, [fetchContent]);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.pageLogo.url} className="App-logo" alt="logo" />
        <p>{page.pageTitle}</p>
      </header>
    </div>
  );
}

export default App;