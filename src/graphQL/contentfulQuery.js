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
  projectHeaderCollection(limit: 1) {
    items {
      title
      subtitle
    }
  }
  seoCollection(limit: 1) {
    items {
      title
      description
      appleTouchIcon {
        url
      }
      favicon {
        url
      }
      thumbnail {
        url
      }
    }
  }
  stackCollection(limit: 1) {
    items {
      title
      subtitle
    }
  }
  stackTechCollection {
    items {
      title
      technologies
    }
  }
}
`