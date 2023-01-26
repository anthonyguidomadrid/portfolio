import { ReactNode } from 'react'

export type PageContent = {
  about?: NormalizedAbout
  assets?: NormalizedAssets
  contact?: NormalizedContact
  headers?: NormalizedHeader[]
  menuItems?: NormalizedMenuItem[]
  project?: NormalizedProjectObject
  seo?: NormalizedSeo
  stack?: NormalizedStack
  translations?: Translation[]
}

export type NormalizedAbout = {
  id: string
  title: string
  subtitle: string
  description: string
  image: {
    url: string
    description: string
  }
  cv: {
    url: string
    text: string
  }
}

export type NormalizedAssets = {
  logo: NormalizedLogo
  socialMedia: NormalizedSocialMedia[]
}

export type NormalizedLogo = {
  url: string
  description: string
}

export type NormalizedSocialMedia = {
  url: string
  name: string
  link: string
}

export type NormalizedContact = {
  id: string
  title: string
  subtitle: string
  description: string
  email: string
  phone: string
}

export type NormalizedHeader = {
  title: string
  subtitle: string
  image: {
    url: string
    description: string
  }
  ctaText?: string
  ctaLink?: string
  type: string
}

export type NormalizedMenuItem = {
  name: string
  link: string
  isProject: boolean
  isCta: boolean
}

export type NormalizedProjectObject = {
  id: string
  title: string
  subtitle: string
  projects: NormalizedProject[]
}

export type NormalizedProject = {
  creationDate: ReactNode
  codeSourceLink?: string
  slug: string
  title: string
  subtitle: string
  description: string
  thumbnail: {
    url: string
    description: string
  }
  images: NormalizedProjectImage[]
  projectLink?: string
  tags: string[]
}

export type NormalizedProjectImage = {
  url: string
  description: string
}

export type NormalizedSeo = {
  title: string
  description: string
  touchIcon: string
  favicon: string
  thumbnail: string
}

export type NormalizedStack = {
  id: string
  title: string
  subtitle: string
  technologies: NormalizedTechnology[]
}

export type NormalizedTechnology = {
  title: string
  techList: string[]
}

export type Translation = {
  string: string
  translation: string
}
