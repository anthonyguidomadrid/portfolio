# Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Contentful was used as a CMS for all the content displayed. The entire app has been coded with Typescript and Jest Unit Testing has been incorporated into this project.

## Previews

![portfolio-preview-1](https://user-images.githubusercontent.com/80059432/215153243-f6688164-8873-4d1d-add8-753dfe52f461.jpg)

![portfolio-preview-2](https://user-images.githubusercontent.com/80059432/215153263-c0a54d9b-449d-4e09-a628-816b2e6e8a8a.jpg)

## Variables

`REACT_APP_CONTENTFUL_SPACE_ID=` [https://www.contentful.com/help/find-space-id/](https://www.contentful.com/help/find-space-id/)\
`REACT_APP_CONTENTFUL_ACCESS_TOKEN=` [https://www.contentful.com/developers/docs/concepts/apis/](https://www.contentful.com/developers/docs/concepts/apis/)\
`REACT_APP_EMAILJS_SERVICE_ID=`\
`REACT_APP_EMAILJS_TEMPLATE_ID=`\
`REACT_APP_EMAILJS_USER_ID=`\
[EmailJS Documentation](https://www.emailjs.com/docs/sdk/send/)
`REACT_APP_GOOGLE_TRACKING_ID=` // Google Analytics tracking ID

## Available Scripts

In the project directory, you can run:

### `npm start / yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm lint / yarn lint`

Review the code formatting and returns some errors.

### `npm lint:fix / yarn lint:fix`

Fix the automatically fixable errors returned by the previous script.

### `npm tsc/ yarn tsc`

Review the typescript code and returns type errors.

### `npm test/ yarn test`

Run the Jest unit tests and returns the results in terms of test coverage.

### `npm verify/ yarn verify`

Run the `lint`, `tsc` and `test` scripts at the same time.

### `npm run deploy / yarn deploy`

Builds the app for production and deploy to [https://anthonyguido.dev/](https://anthonyguido.dev/) via Github Pages.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm serve/ yarn serve`

Serve the last built app on local.

## Libraries

Here is the list of the most important libraries installed for this project:

- `classnames`
- `dayjs`
- `emailjs-com`
- `es-lint`
- `jest`
- `prettier`
- `react-ga4`
- `react-router-dom`
- `react-router-hash-link`
- `react-scripts`
- `react-snap`
- `react-spinners`
- `splide`
- `tailwindcss`
- `typescript`

## Contentful Content Models

```
{
  aboutCollection(limit: 1, locale) {
    items {
      id: string
      title: string
      subtitle: string[]
      description {
        json: Document
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
  contactCollection(limit: 1, locale) {
    items {
      id: string
      title: string
      subtitle: string
      description {
        json: Document
      }
      email: string
      phone: string
    }
  }
  headerCollection(limit: 2, locale) {
    items {
      title: string
      subtitle: string
      banner {
        url: string
        description: string
      }
      cta: string
      ctaLink: string
      type: string
    }
  }
  menuItemCollection(limit: 10, locale) {
    items {
      name: string
      link: string
      index: number
      isProject: boolean
      cta: boolean
    }
  }
  projectCollection(locale) {
    items {
      creationDate: Date
      slug: string
      title: string
      subtitle: string
      description {
        json: Document
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
  projectHeaderCollection(limit: 1, locale) {
    items {
      id: string
      title: string
      subtitle: string
    }
  }
  seoCollection(limit: 1, locale) {
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
  stackCollection(limit: 1, locale) {
    items {
      id: string
      title: string
      subtitle: string
    }
  }
  stackTechCollection(locale) {
    items {
      title: string
      technologies: string
    }
  }
  translationCollection(locale) {
    items {
      string: string
      translation: string
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
