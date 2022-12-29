import dayjs from 'dayjs'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const contentfulNormalizer = (response) => {
    return {
        about: {
            title: response?.data?.aboutCollection?.items?.[0]?.title,
            subtitle: response?.data?.aboutCollection?.items?.[0]?.subtitle,
            description: documentToHtmlString(response?.data?.aboutCollection?.items?.[0]?.description?.json),
            image: {
                url: response?.data?.aboutCollection?.items?.[0]?.image?.url,
                description: response?.data?.aboutCollection?.items?.[0]?.image?.description
            }
        },
        assets: {
            logo: {
                url: response?.data?.assetsCollection?.items?.[0].logo?.url,
                description: response?.data?.assetsCollection?.items?.[0].logo?.description
            }
        },
        contact: {
            title: response?.data?.contactCollection?.items?.[0]?.title,
            subtitle: response?.data?.contactCollection?.items?.[0]?.subtitle,
            description: documentToHtmlString(response?.data?.contactCollection?.items?.[0]?.description?.json),
            email: response?.data?.contactCollection?.items?.[0]?.email,
            phone: response?.data?.contactCollection?.items?.[0]?.phone
        },
        header: {
            title: response?.data?.headerCollection?.items?.[0]?.title,
            subtitle: response?.data?.headerCollection?.items?.[0]?.subtitle,
            image: {
                url: response?.data?.headerCollection?.items?.[0]?.banner?.url,
                description: response?.data?.headerCollection?.items?.[0]?.banner?.description
            },
            ctaText: response?.data?.headerCollection?.items?.[0]?.cta
        },
        menu: {
            menuItems: response?.data?.menuCollection?.items?.[0]?.menuItems,
            cta: response?.data?.menuCollection?.items?.[0]?.cta
        },
        projects: response?.data?.projectCollection?.items?.map(project => {
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
        seo: {
            title: response?.data?.seoCollection?.items?.[0]?.title,
            description: response?.data?.seoCollection?.items?.[0]?.description
        },
        stack: {
            title: response?.data?.stackCollection?.items?.[0]?.title,
            subtitle: response?.data?.stackCollection?.items?.[0]?.subtitle,
            languages: response?.data?.stackCollection?.items?.[0]?.languages,
            tools: response?.data?.stackCollection?.items?.[0]?.tools,
            libraries: response?.data?.stackCollection?.items?.[0]?.libraries,
            frameworks: response?.data?.stackCollection?.items?.[0]?.frameworks,
            services: response?.data?.stackCollection?.items?.[0]?.services
        }
    }
}