import { Helmet, HelmetProvider } from 'react-helmet-async'

export const Seo = ({seoPageContent}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{seoPageContent?.title}</title>
                <meta
                name="description"
                content={seoPageContent?.description}
                />
            </Helmet>
        </HelmetProvider>
    )
}