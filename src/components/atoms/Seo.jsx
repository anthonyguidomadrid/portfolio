import { Helmet, HelmetProvider } from 'react-helmet-async'

export const Seo = ({seoPageContent}) => {
    const { title, description, touchIcon, favicon, thumbnail } = seoPageContent
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta
                name="description"
                content={description}
                />
                <link rel="apple-touch-icon" href={touchIcon} />
                <link rel="icon" type="image/x-icon" href={favicon} />
                <meta name="thumbnail" content={thumbnail} />
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description} />
                <meta property="og:image" content={thumbnail} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={thumbnail} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
        </HelmetProvider>
    )
}