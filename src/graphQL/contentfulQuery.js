export const graphQlQuery = `
{
  aboutCollection {
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
  contactCollection {
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
  headerCollection {
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
  seoCollection {
    items {
      title
      description
    }
  }
  stackCollection {
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