export const contentfulNormalizer = (response) => {
    return {
        page: {
            title: response?.data?.pageCollection?.items?.[0]?.pageTitle,
            logoUrl:response?.data?.pageCollection?.items?.[0]?.pageLogo?.url
        },
        seo: {
            title: response?.data?.seoCollection?.items?.[0]?.title,
            description: response?.data?.seoCollection?.items?.[0]?.description
        }
    }
}