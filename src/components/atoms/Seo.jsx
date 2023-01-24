import { Helmet } from 'react-helmet'

export const Seo = ({seoPageContent}) => {
    const { title, description, touchIcon, favicon, thumbnail } = seoPageContent

    return (
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
            <meta property="og:site_name" content={title}/>
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:description" content={description} />
            <meta property="og:image" itemprop="image" content={thumbnail} />
            <meta property="og:image:width" content="256" />
            <meta property="og:image:height" content="256" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={thumbnail} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:url" content={window.location.hostname} />
        </Helmet>
    )
}