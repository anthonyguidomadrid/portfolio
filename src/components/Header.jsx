export const Header = ({headerContent}) => {
    const { title, subtitle, image, ctaText, ctaLink} = headerContent
    return (
        <div style={{backgroundImage: `url(${image?.url ?? '../../default-banner-image.jpeg'})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundAttachment: 'fixed'}} className="h-screen flex justify-center items-center flex-col text-white">
            <h1 className="text-6xl font-bold uppercase shadow">{title ?? 'Hello World'}</h1>
            {subtitle && <p className="text-3xl uppercase py-5 shadow">{subtitle}</p>}
            {ctaText && ctaLink && <a href={ctaLink} className="inline-block text-sm px-4 py-2 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 uppercase text-lg">{ctaText}</a>}
        </div>
    )
}