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
      cv {
        url
        title
      }
    }
  }
  assetsCollection(limit: 1) {
    items {
      logo {
        url
        description
      }
      socialMediaCollection {
        items {
          url
          title
          description
        }
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
      ctaLink
    }
  }
  menuCollection(limit: 1) {
    items {
      menuItems
      cta
    }
  }
  projectCollection {
    items {
      id
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