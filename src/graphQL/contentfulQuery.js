export const graphQlQuery = `
{
  aboutCollection(limit: 1) {
    items {
      title
      subtitle
      description {
        json
      }
      image {
        url
        description
      }
    }
  }
  assetsCollection(limit: 1) {
    items {
      logo {
        url
        description
      }
      
    }
  } 
  contactCollection(limit: 1) {
    items {
      title
      subtitle
      description {
        json
      }
      email
      phone
    }
  }
  headerCollection(limit: 1) {
    items {
      title
      subtitle
      banner {
        url
        description
      }
      cta
    }
  }
  projectCollection {
    items {
      creationDate
      slug
      title
      subtitle
      description {
        json
      }
      thumbnail {
        url
        description
      }
      imagesCollection {
        items {
          url
          description
        }
      }
      link
      codeSourceLink
      tags
    }
  }
  seoCollection(limit: 1) {
    items {
      title
      description
    }
  }
  stackCollection(limit: 1) {
    items {
      title
      subtitle
      languages
      tools
      libraries
      frameworks
      services
    }
  }
}
`