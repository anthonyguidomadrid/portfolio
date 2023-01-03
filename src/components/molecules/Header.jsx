import { Button } from '../atoms/Button'

export const Header = ({headerContent}) => {
    const { title, subtitle, image, ctaText, ctaLink} = headerContent
    return (
        <section style={{backgroundImage: `url(${image?.url ?? '../../default-banner-image.jpeg'})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundAttachment: 'fixed'}} className="h-screen flex justify-center items-center flex-col text-white">
            <h1 className="text-4xl md:text-6xl font-bold uppercase shadow">{title ?? 'Hello World'}</h1>
            {subtitle && <p className="text-xl md:text-3xl uppercase py-5 shadow">{subtitle}</p>}
            {ctaText && ctaLink && <Button text={ctaText} link={ctaLink} AdditionalClasses={'uppercase text-lg md:mt-2'}/>}
        </section>
    )
}
