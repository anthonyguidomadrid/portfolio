import {
  NormalizedAbout,
  NormalizedContact,
  NormalizedHeader,
  NormalizedLogo,
  NormalizedMenuItem,
  NormalizedProject,
  NormalizedProjectObject,
  NormalizedSeo,
  NormalizedSocialMedia,
  NormalizedStack,
  NormalizedTranslation
} from '~types/normalizedContentTypes'

export const projectsMock: NormalizedProject[] = [
  {
    creationDate: 'Mars 2023',
    codeSourceLink: '/project1',
    slug: 'project1',
    title: 'Project 1',
    subtitle: 'This is Project 1',
    description: 'Project 1 description',
    thumbnail: {
      url: '/thumbnail-link-project-2',
      description: 'thumbnail link Project 2'
    },
    images: [
      {
        url: '/project-1-image-1',
        description: 'project 1 image 1'
      },
      {
        url: '/project-1-image-2',
        description: 'project 1 image 2'
      }
    ],
    projectLink: '/project-link-project-1',
    tags: ['tag1 project 1', 'tag2 project 1']
  },
  {
    creationDate: 'October 2022',
    codeSourceLink: '/project2',
    slug: 'project2',
    title: 'Project 2',
    subtitle: 'This is Project 2',
    description: 'Project 2 description',
    thumbnail: {
      url: '/thumbnail-link-project-2',
      description: 'thumbnail link Project 2'
    },
    images: [
      {
        url: '/project-2-image-1',
        description: 'project 2 image 1'
      },
      {
        url: '/project-2-image-2',
        description: 'project 2 image 2'
      }
    ],
    projectLink: '/project-link-project-2',
    tags: ['tag1 project 2', 'tag2 project 2']
  }
]

export const seoMock: NormalizedSeo = {
  title: 'Website title',
  description: 'Website description',
  touchIcon: 'touch-icon-link',
  favicon: 'favicon-link',
  thumbnail: 'thumbnail-link'
}

export const aboutMock: NormalizedAbout = {
  id: 'about',
  title: 'About',
  subtitle: ['Subtitle 1', 'Subtitle 2'],
  description: 'About description',
  image: {
    url: '/image-url',
    description: 'Image description'
  },
  cv: {
    url: '/cv-url',
    text: 'See my CV'
  }
}

export const contactMock: NormalizedContact = {
  id: 'contact',
  title: 'Contact',
  subtitle: 'Contact Subtitle',
  description: 'Contact description',
  email: 'email@email.com',
  phone: '+33 612 345 678'
}

export const translationsMock: NormalizedTranslation[] = [
  {
    string: 'translation.string.1',
    translation: 'Translation 1'
  },
  {
    string: 'translation.string.2',
    translation: 'Translation 2'
  }
]

export const logoMock: NormalizedLogo = {
  url: '/logo-url',
  description: 'logo'
}

export const menuItemsMock: NormalizedMenuItem[] = [
  {
    name: 'About',
    link: 'about',
    isProject: false,
    isCta: false
  },
  {
    name: 'Projects',
    link: 'projects',
    isProject: true,
    isCta: false
  },
  {
    name: 'Contact',
    link: 'contact',
    isProject: false,
    isCta: true
  }
]

export const socialMediasMock: NormalizedSocialMedia[] = [
  {
    url: '/facebook-image',
    name: 'Facebook',
    link: '/facebook-link'
  },
  {
    url: '/linkedin-image',
    name: 'LinkedIn',
    link: '/linkedin-link'
  }
]

export const headerMock: NormalizedHeader = {
  title: 'Header Title',
  subtitle: 'Header Subtitle',
  image: {
    url: '/image-url',
    description: 'Image Description'
  },
  ctaText: 'CTA Text',
  ctaLink: '/cta-link',
  type: 'home'
}

export const projectSectionMock: NormalizedProjectObject = {
  id: 'projects',
  title: 'Projects',
  subtitle: 'Projects Subtitle',
  projects: projectsMock
}

export const stackMock: NormalizedStack = {
  id: 'stack',
  title: 'Stack',
  subtitle: 'Stack subtitle',
  technologies: [
    {
      title: 'Technology 1',
      techList: ['Tech 1', 'Tech 2', 'Tech 3']
    },
    {
      title: 'Technology 2',
      techList: ['Tech 1', 'Tech 2']
    },
    {
      title: 'Technology 2',
      techList: ['Tech 1', 'Tech 2', 'Tech 3', 'Tech 4', 'Tech 5']
    }
  ]
}
