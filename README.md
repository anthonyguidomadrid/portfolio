# Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Contentful was used as a CMS for all the content displayed.

## Previews

![screenshot1](https://user-images.githubusercontent.com/80059432/211064460-9f57ac9f-f6f7-4d72-a238-6468af1102fc.jpg)

![screenshot2](https://user-images.githubusercontent.com/80059432/211064470-9d770925-438e-4cf3-bed2-d283f1936ea8.jpg)

## Variables

`REACT_APP_CONTENTFUL_SPACE_ID=` [https://www.contentful.com/help/find-space-id/](https://www.contentful.com/help/find-space-id/)\
`REACT_APP_CONTENTFUL_ACCESS_TOKEN=` [https://www.contentful.com/developers/docs/concepts/apis/](https://www.contentful.com/developers/docs/concepts/apis/)\
`REACT_APP_EMAILJS_SERVICE_ID=`\
`REACT_APP_EMAILJS_TEMPLATE_ID=`\
`REACT_APP_EMAILJS_USER_ID=`\
[EmailJS Documentation](https://www.emailjs.com/docs/sdk/send/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Builds the app for production and deploy to [https://anthonyguido.dev/](https://anthonyguido.dev/) via Github Pages.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Libraries

Here is the list of the libraries installed for this project:

- `classnames`
- `dayjs`
- `emailjs-com`
- `react-router-dom`
- `react-router-hash-link`
- `react-scripts`
- `react-spinners`
- `tailwind`

## Contentful Content Models

```
{
  aboutCollection(limit: 1) {
    items {
      title: string
      subtitle: string[]
      description {
        json
      }
      image {
        url: string
        description: string
      }
      cv {
        url: string
        title: string
      }
    }
  }
  assetsCollection(limit: 1) {
    items {
      logo {
        url: string
        description: string
      }
      socialMediaCollection {
        items {
          url: string
          title: string
          description: string
        }
      }
    }
  }
  contactCollection(limit: 1) {
    items {
      title: string
      subtitle: string
      description {
        json
      }
      email: string
      phone: string
    }
  }
  headerCollection(limit: 1) {
    items {
      title: string
      subtitle: string
      banner {
        url: string
        description: string
      }
      cta: string
      ctaLink: string
    }
  }
  menuCollection(limit: 1) {
    items {
      menuItems: string[]
      cta: string
    }
  }
  projectCollection {
    items {
      creationDate: Date
      slug: string
      title: string
      subtitle: string
      description {
        json
      }
      thumbnail {
        url: string
        description: string
      }
      imagesCollection {
        items {
          url: string
          description: string
        }
      }
      link: string
      codeSourceLink: string
      tags: string[]
    }
  }
  projectHeaderCollection(limit: 1) {
    items {
      title: string
      subtitle: string
    }
  }
  seoCollection(limit: 1) {
    items {
      title: string
      description: string
      appleTouchIcon {
        url: string
      }
      favicon {
        url: string
      }
      thumbnail {
        url: string
      }
    }
  }
  stackCollection(limit: 1) {
    items {
      title: string
      subtitle: string
    }
  }
  stackTechCollection {
    items {
      title: string
      technologies: string[]
    }
  }
}
```

### Deployment

This app is currently deployed on this domain: [https://anthonyguido.dev/](https://anthonyguido.dev/)

## Author

**Anthony Guido**

- Github: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

## License

Copyright © 2021 [Anthony Guido](https://github.com/anthonyguidomadrid/).
