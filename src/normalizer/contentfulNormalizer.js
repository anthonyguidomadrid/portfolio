import dayjs from 'dayjs'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const contentfulNormalizer = (response) => {
    return {
        ...(response.data?.aboutCollection?.items?.length && 
            {about: {
            title: response?.data?.aboutCollection?.items?.[0]?.title,
            subtitle: response?.data?.aboutCollection?.items?.[0]?.subtitle,
            description: documentToHtmlString(response?.data?.aboutCollection?.items?.[0]?.description?.json),
            image: {
                url: response?.data?.aboutCollection?.items?.[0]?.image?.url,
                description: response?.data?.aboutCollection?.items?.[0]?.image?.description
            },
            cv: {
                url: response?.data?.aboutCollection?.items?.[0]?.cv?.url,
                text: response?.data?.aboutCollection?.items?.[0]?.cv?.title,
            }
        }}),
        assets: {
            logo: {
                url: response?.data?.assetsCollection?.items?.[0].logo?.url,
                description: response?.data?.assetsCollection?.items?.[0]?.logo?.description
            },
            socialMedia: response?.data?.assetsCollection?.items?.[0]?.socialMediaCollection?.items?.map(elm => {
                return {
                    url: elm?.url,
                    name: elm?.title,
                    link: elm?.description
                }
            })
        },
        ...(response.data?.contactCollection?.items?.length && {contact: {
            title: response?.data?.contactCollection?.items?.[0]?.title,
            subtitle: response?.data?.contactCollection?.items?.[0]?.subtitle,
            description: documentToHtmlString(response?.data?.contactCollection?.items?.[0]?.description?.json),
            email: response?.data?.contactCollection?.items?.[0]?.email,
            phone: response?.data?.contactCollection?.items?.[0]?.phone
        }}),
        header: {
            title: response?.data?.headerCollection?.items?.[0]?.title,
            subtitle: response?.data?.headerCollection?.items?.[0]?.subtitle,
            image: {
                url: response?.data?.headerCollection?.items?.[0]?.banner?.url,
                description: response?.data?.headerCollection?.items?.[0]?.banner?.description
            },
            ctaText: response?.data?.headerCollection?.items?.[0]?.cta,
            ctaLink: response?.data?.headerCollection?.items?.[0]?.ctaLink
        },
        menu: {
            menuItems: response?.data?.menuCollection?.items?.[0]?.menuItems,
            cta: response?.data?.menuCollection?.items?.[0]?.cta
        },
        ...(response.data?.aboutCollection?.items?.length && {project: {
            title: response?.data?.projectHeaderCollection?.items?.[0].title,
            subtitle: response?.data?.projectHeaderCollection?.items?.[0].subtitle,
            projects: response?.data?.projectCollection?.items?.sort((a,b) => {
                return new Date(b.creationDate) - new Date(a.creationDate);
              }).map(project => {
                return {
                    creationDate: dayjs(project.creationDate).format('MMMM YYYY'),
                    codeSourceLink: project.codeSourceLink,
                    slug: project.slug,
                    title: project.title,
                    subtitle: project.subtitle,
                    description: documentToHtmlString(project.description?.json),
                    thumbnail: {
                        url: project.thumbnail?.url,
                        description: project.thumbnail?.description
                    },
                    images: project.imagesCollection?.items?.map(image => {
                        return {
                            url: image.url,
                            description: image.description
                        }
                    }),
                    projectLink: project.link,
                    tags: project.tags
                }
            }),
        }}),
        seo: {
            title: response?.data?.seoCollection?.items?.[0]?.title,
            description: response?.data?.seoCollection?.items?.[0]?.description,
            touchIcon: response?.data?.seoCollection?.items?.[0]?.appleTouchIcon?.url,
            favicon: response?.data?.seoCollection?.items?.[0]?.favicon?.url,
            thumbnail: response?.data?.seoCollection?.items?.[0]?.thumbnail?.url
        },
        ...(response?.data?.stackTechCollection?.items?.length > 0 && {stack: {
            title: response?.data?.stackCollection?.items?.[0]?.title,
            subtitle: response?.data?.stackCollection?.items?.[0]?.subtitle,
            technologies: response?.data?.stackTechCollection?.items?.map(item => {
                return {
                    title: item?.title,
                    techList: item?.technologies
                }
            }).sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
        }})
    }
}