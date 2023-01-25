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
  }
}

export type ContentfulAbout = {
  id: string
  title: string
  subtitle: string
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
