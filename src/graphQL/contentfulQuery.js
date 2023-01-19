export const graphQlQuery = (locale) => {
  return `
{
  aboutCollection(limit: 1, locale: "${locale}") {
    items {
      id
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
      id
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
  menuItemCollection(limit: 10, locale: "${locale}") {
    items {
      name
      link
      index
      isProject
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
      id
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
      id
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
  translationCollection(locale: "${locale}") {
    items {
      string
      translation
    }
  }
}
`}