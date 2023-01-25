import classNames from 'classnames'
import { ReactComponent as BackButton } from '../../assets/BackButton.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { useBreakpoint } from '../../customHooks/useBreakpoint'
import {
  NormalizedHeader,
  NormalizedMenuItem,
  NormalizedProject
} from '~types/normalizedContentTypes'
import { FunctionComponent } from 'react'

export type HeaderProps = {
  headerContent: Partial<NormalizedHeader & NormalizedProject> | undefined
  isFullSize?: boolean
  displayBackBtn?: boolean
  locale: string | undefined
  menuItems?: NormalizedMenuItem[]
}

export const Header: FunctionComponent<HeaderProps> = ({
  headerContent,
  isFullSize = true,
  displayBackBtn = false,
  locale,
  menuItems
}) => {
  const point = useBreakpoint()
  const isMobile = point === 'sm' || point === 'md'
  const projectLink =
    menuItems && menuItems.find(project => project.isProject)?.link

  return (
    <div
      style={{
        backgroundColor: '#bfbfbf',
        backgroundBlendMode: 'multiply',
        backgroundImage: `url(${
          headerContent?.thumbnail?.url ??
          headerContent?.image?.url ??
          '../../default-banner-image.jpeg'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundPosition: 'center'
      }}
      className={classNames(
        'flex justify-center flex-col text-white px-5',
        { 'h-screen': isFullSize },
        { 'py-36': !isFullSize }
      )}
    >
      {displayBackBtn && (
        <Link
          smooth
          to={locale ? `/${locale}/#${projectLink}` : `/#${projectLink}`}
          title="Go back"
          className="flex items-center justify-center p-2 rounded-full bg-gray-500 opacity-80 mb-7 ml-10 h-9 w-9 md:h-11 md:w-11"
        >
          <BackButton />
        </Link>
      )}
      <h1 className="text-4xl md:text-6xl font-bold uppercase drop-shadow-lg text-center">
        {headerContent?.title ?? 'Hello World'}
      </h1>
      {headerContent?.subtitle && (
        <p className="text-xl md:text-3xl uppercase py-5 drop-shadow-lg text-center">
          {headerContent?.subtitle}
        </p>
      )}
      {headerContent?.ctaText && headerContent?.ctaLink && (
        <Link
          smooth
          to={
            locale
              ? `/${locale}${headerContent?.ctaLink}`
              : headerContent?.ctaLink
          }
          className={
            'uppercase text-lg md:mt-2 text-center w-fit mx-auto text-white border-white hover:border-transparent hover:text-black hover:bg-white inline-block text-sm px-4 py-2 leading-none border'
          }
        >
          {headerContent?.ctaText}
        </Link>
      )}
    </div>
  )
}
