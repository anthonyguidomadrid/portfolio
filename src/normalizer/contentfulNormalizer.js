import dayjs from "dayjs";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
require("dayjs/locale/es");

export const contentfulNormalizer = (response, locale) => {
  return {
    ...(response.data?.aboutCollection?.items?.length && {
      about: {
        id: response?.data?.aboutCollection?.items?.[0]?.id,
        title: response?.data?.aboutCollection?.items?.[0]?.title,
        subtitle: response?.data?.aboutCollection?.items?.[0]?.subtitle,
        description: documentToHtmlString(
          response?.data?.aboutCollection?.items?.[0]?.description?.json
        ),
        image: {
          url: response?.data?.aboutCollection?.items?.[0]?.image?.url,
          description:
            response?.data?.aboutCollection?.items?.[0]?.image?.description,
        },
        cv: {
          url: response?.data?.aboutCollection?.items?.[0]?.cv?.url,
          text: response?.data?.aboutCollection?.items?.[0]?.cv?.title,
        },
      },
    }),
    assets: {
      logo: {
        url: response?.data?.assetsCollection?.items?.[0].logo?.url,
        description:
          response?.data?.assetsCollection?.items?.[0]?.logo?.description,
      },
      socialMedia:
        response?.data?.assetsCollection?.items?.[0]?.socialMediaCollection?.items?.map(
          (elm) => {
            return {
              url: elm?.url,
              name: elm?.title,
              link: elm?.description,
            };
          }
        ),
    },
    ...(response.data?.contactCollection?.items?.length && {
      contact: {
        id: response?.data?.contactCollection?.items?.[0]?.id,
        title: response?.data?.contactCollection?.items?.[0]?.title,
        subtitle: response?.data?.contactCollection?.items?.[0]?.subtitle,
        description: documentToHtmlString(
          response?.data?.contactCollection?.items?.[0]?.description?.json
        ),
        email: response?.data?.contactCollection?.items?.[0]?.email,
        phone: response?.data?.contactCollection?.items?.[0]?.phone,
      },
    }),
    ...(response?.data?.headerCollection?.items?.length && {
      headers: response?.data?.headerCollection?.items?.map((header) => {
        return {
          title: header.title,
          subtitle: header.subtitle,
          image: {
            url: header.banner?.url,
            description: header.banner?.description,
          },
          ctaText: header.cta,
          ctaLink: header.ctaLink,
          type: header.type,
        };
      }),
    }),
    ...(response.data?.menuItemCollection?.items?.length && {
      menuItems: response.data.menuItemCollection.items
        .sort((a, b) => {
          return a.index - b.index;
        })
        .map((item) => {
          return {
            name: item.name,
            link: item.link,
            isProject: item.isProject,
            isCta: item.cta,
          };
        }),
    }),
    ...(response.data?.aboutCollection?.items?.length && {
      project: {
        id: response?.data?.projectHeaderCollection?.items?.[0].id,
        title: response?.data?.projectHeaderCollection?.items?.[0].title,
        subtitle: response?.data?.projectHeaderCollection?.items?.[0].subtitle,
        projects: response?.data?.projectCollection?.items
          ?.sort((a, b) => {
            return new Date(b.creationDate) - new Date(a.creationDate);
          })
          .map((project) => {
            const date = dayjs(project.creationDate)
              .locale(locale ? locale.slice(0, 2) : "en")
              .format("MMMM YYYY");
            return {
              creationDate: date.slice(0, 1).toUpperCase() + date.slice(1),
              codeSourceLink: project.codeSourceLink,
              slug: project.slug,
              title: project.title,
              subtitle: project.subtitle,
              description: documentToHtmlString(project.description?.json),
              thumbnail: {
                url: project.thumbnail?.url,
                description: project.thumbnail?.description,
              },
              images: project.imagesCollection?.items?.map((image) => {
                return {
                  url: image.url,
                  description: image.description,
                };
              }),
              projectLink: project.link,
              tags: project.tags,
            };
          }),
      },
    }),
    seo: {
      title: response?.data?.seoCollection?.items?.[0]?.title,
      description: response?.data?.seoCollection?.items?.[0]?.description,
      touchIcon: response?.data?.seoCollection?.items?.[0]?.appleTouchIcon?.url,
      favicon: response?.data?.seoCollection?.items?.[0]?.favicon?.url,
      thumbnail: response?.data?.seoCollection?.items?.[0]?.thumbnail?.url,
    },
    ...(response?.data?.stackTechCollection?.items?.length > 0 && {
      stack: {
        id: response?.data?.stackCollection?.items?.[0]?.id,
        title: response?.data?.stackCollection?.items?.[0]?.title,
        subtitle: response?.data?.stackCollection?.items?.[0]?.subtitle,
        technologies: response?.data?.stackTechCollection?.items
          ?.map((item) => {
            return {
              title: item?.title,
              techList: item?.technologies,
            };
          })
          .sort((a, b) => {
            return a.title.localeCompare(b.title);
          }),
      },
    }),
    ...(response.data?.translationCollection?.items?.length && {
      translations: response.data.translationCollection.items.map(
        (translation) => {
          return {
            string: translation.string,
            translation: translation.translation,
          };
        }
      ),
    }),
  };
};
