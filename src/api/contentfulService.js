import { graphQlQuery } from '../graphQL/contentfulQuery'

export const fetchContentfulContent = () => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: graphQlQuery }),
      })
      .then(response => {
        return response.json()
    })
    .catch(error => {
        console.error('There was an error!', error);
    })
  }