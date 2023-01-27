import { Document } from '../..//node_modules/@contentful/rich-text-types/dist/types/types'

export type ContentfulResponse = {
  data: {
    aboutCollection: {
      items: ContentfulAbout[]
    }
    assetsCollection: {
      items: ContentfulAsset[]
    }
    contactCollection: {
      items: ContentfulContact[]
    }
    headerCollection: {
      items: ContentfulHeader[]
    }
    menuItemCollection: {
      items: ContentfulMenu[]
    }
    projectCollection: {
      items: ContentfulProject[]
    }
    projectHeaderCollection: {
      items: ContentfulProjectHeader[]
    }
    seoCollection: {
      items: ContentfulSeo[]
    }
    stackCollection: {
      items: ContentfulStackHeader[]
    }
    stackTechCollection: {
      items: ContentfulStackTech[]
    }
    translationCollection: {
      items: ContentfulTranslation[]
    }
  }
}

export type ContentfulAbout = {
  id: string
  title: string
  subtitle: string[]
  description: {
    json: Document
  }
  image: {
    url: string
    description: string
  }
  cv: {
    url: string
    title: string
  }
}

export type ContentfulAsset = {
  logo: {
    url: string
    description: string
  }
  socialMediaCollection: {
    items: ContentfulSocialMedia[]
  }
}

export type ContentfulSocialMedia = {
  url: string
  title: string
  description: string
}

export type ContentfulContact = {
  id: string
  title: string
  subtitle: string
  description: {
    json: Document
  }
  email: string
  phone: string
}

export type ContentfulHeader = {
  title: string
  subtitle: string
  banner: {
    url: string
    description: string
  }
  cta: string
  ctaLink: string
  type: string
}

export type ContentfulMenu = {
  index: number
  name: string
  link: string
  isProject: boolean
  cta: boolean
}

export type ContentfulProjectHeader = {
  id: string
  title: string
  subtitle: string
}

export type ContentfulProject = {
  creationDate: Date
  codeSourceLink: string
  slug: string
  title: string
  subtitle: string
  description: {
    json: Document
  }
  thumbnail: {
    url: string
    description: string
  }
  imagesCollection: {
    items: ContentfulProjectImage[]
  }
  link: string
  tags: string[]
}

export type ContentfulProjectImage = {
  url: string
  description: string
}

export type ContentfulSeo = {
  title: string
  description: string
  appleTouchIcon: {
    url: string
  }
  favicon: {
    url: string
  }
  thumbnail: {
    url: string
  }
}

export type ContentfulStackHeader = {
  id: string
  title: string
  subtitle: string
}

export type ContentfulStackTech = {
  title: string
  technologies: string[]
}

export type ContentfulTranslation = {
  string: string
  translation: string
}
