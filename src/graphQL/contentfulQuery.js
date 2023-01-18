export const graphQlQuery = (locale) => {
  return `
{
  aboutCollection(limit: 1, locale: "${locale}") {
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
  contactCollection(limit: 1, locale: "${locale}") {
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
  headerCollection(limit: 2, locale: "${locale}") {
    items {
      title
      subtitle
      banner {
        url
        description
      }
      cta
      ctaLink
      type
    }
  }
  menuCollection(limit: 1, locale: "${locale}") {
    items {
      menuItems
      cta
    }
  }
  projectCollection(locale: "${locale}") {
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
  projectHeaderCollection(limit: 1, locale: "${locale}") {
    items {
      title
      subtitle
    }
  }
  seoCollection(limit: 1, locale: "${locale}") {
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
  stackCollection(limit: 1, locale: "${locale}") {
    items {
      title
      subtitle
    }
  }
  stackTechCollection(locale: "${locale}") {
    items {
      title
      technologies
    }
  }
}
`}