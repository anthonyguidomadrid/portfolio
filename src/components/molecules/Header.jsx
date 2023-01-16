import classNames from 'classnames'
import { ReactComponent as BackButton } from '../../assets/BackButton.svg'
import { HashLink as Link } from 'react-router-hash-link'

export const Header = ({headerContent, isFullSize = true, displayBackBtn=false}) => {
    const { title, subtitle, image, ctaText, ctaLink, thumbnail} = headerContent
    return (
        <section style={{backgroundImage: `url(${thumbnail?.url ?? image?.url ?? '../../default-banner-image.jpeg'})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundAttachment: 'fixed'}} className={classNames("flex justify-center flex-col text-white px-5", {'h-screen' : isFullSize}, {'py-36' : !isFullSize})}>
            {displayBackBtn && <Link to="/#projects" title="Go back" className="flex items-center justify-center p-2 rounded-full bg-gray-500 opacity-80 mb-7 ml-10 h-9 w-9 md:h-11 md:w-11">
                <BackButton />
            </Link>}
            <h1 className="text-4xl md:text-6xl font-bold uppercase drop-shadow-lg text-center">{title ?? 'Hello World'}</h1>
            {subtitle && <p className="text-xl md:text-3xl uppercase py-5 drop-shadow-lg text-center">{subtitle}</p>}
            {ctaText && ctaLink && <Link to={ctaLink} className={'uppercase text-lg md:mt-2 text-center w-fit mx-auto text-white border-white hover:border-transparent hover:text-black hover:bg-white inline-block text-sm px-4 py-2 leading-none border'}>{ctaText}</Link>}
        </section>
    )
}
