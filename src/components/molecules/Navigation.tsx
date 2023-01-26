import { FunctionComponent, useState } from 'react'
import classNames from 'classnames'
import { ReactComponent as HamburgerMenu } from '../../assets/HamburgerMenu.svg'
import { ReactComponent as EnglishFlag } from '../../assets/EnFlag.svg'
import { ReactComponent as SpanishFlag } from '../../assets/EsFlag.svg'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import { locales } from '../../config/locales'
import { useBreakpoint } from '../../customHooks/useBreakpoint'
import { MobileSubMenu } from '../atoms/MobileSubmenu'
import { ChevronButton } from '../atoms/ChevronButton'
import {
  NormalizedLogo,
  NormalizedMenuItem,
  NormalizedProject
} from '~types/normalizedContentTypes'

export type NavigationProps = {
  logo: NormalizedLogo | undefined
  menuItems: NormalizedMenuItem[] | undefined
  locale: string | undefined
  projectsContent: NormalizedProject[] | undefined
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  logo,
  menuItems,
  locale,
  projectsContent
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [ispageScrolled, setIsPageScrolled] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage =
    location.pathname === '/' || location.pathname === `/${locales.spain}/`
  const currentPath = locale ? location.pathname.slice(7) : location.pathname
  const ctaMenuItem = menuItems?.find(item => item.isCta)
  const point = useBreakpoint()
  const isMobile = point === 'sm' || point === 'md'

  const scrollFunction = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setIsPageScrolled(true)
    } else {
      setIsPageScrolled(false)
    }
  }

  window.onscroll = () => scrollFunction()

  return (
    <nav
      className={classNames(
        'flex items-center justify-between flex-wrap p-6 fixed top-0 w-full z-50 transition-all duration-500',
        {
          'bg-slate-900 bg-opacity-80':
            ispageScrolled || isMenuOpen || isSubMenuOpen
        }
      )}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <HashLink
          smooth
          to={locale ? `${locale}/#top` : '/#top'}
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo?.url}
            alt={logo?.description}
            className="h-7 w-7"
          ></img>
        </HashLink>
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <HamburgerMenu className="h-4 w-4" />
        </button>
      </div>
      <div
        className={classNames(
          'w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500',
          {
            'opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100': !isMenuOpen
          }
        )}
      >
        <div className="text-sm md:flex-grow">
          {menuItems
            ?.filter(item => !item.isCta)
            .map((item, idx) => {
              const { name, link, isProject } = item
              return isHomePage ? (
                <>
                  <div className="flex md:inline items-end">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link
                      key={idx}
                      activeStyle={{ color: '#ffffff' }}
                      className={classNames(
                        'block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white',
                        { 'mr-4': !isProject }
                      )}
                      to={link}
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                    </Link>
                    {isProject && (
                      <ChevronButton
                        isSubMenuOpen={isSubMenuOpen}
                        setIsSubMenuOpen={setIsSubMenuOpen}
                      />
                    )}
                  </div>
                  {isMobile &&
                    isProject &&
                    projectsContent &&
                    projectsContent?.length > 0 && (
                      <MobileSubMenu
                        projectsContent={projectsContent}
                        locale={locale}
                        isSubMenuOpen={isSubMenuOpen}
                        setMenuOpen={setMenuOpen}
                        setIsSubMenuOpen={setIsSubMenuOpen}
                      />
                    )}
                </>
              ) : (
                <>
                  <div className="flex md:inline items-end">
                    <HashLink
                      key={idx}
                      className={classNames(
                        'block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white',
                        { 'mr-4': !isProject }
                      )}
                      smooth
                      to={locale ? `${locale}/#${link}` : `/#${link}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                    </HashLink>
                    {isProject && (
                      <ChevronButton
                        isSubMenuOpen={isSubMenuOpen}
                        setIsSubMenuOpen={setIsSubMenuOpen}
                      />
                    )}
                  </div>
                  {isMobile &&
                    isProject &&
                    projectsContent &&
                    projectsContent?.length > 0 && (
                      <MobileSubMenu
                        projectsContent={projectsContent}
                        locale={locale}
                        isSubMenuOpen={isSubMenuOpen}
                        setMenuOpen={setMenuOpen}
                        setIsSubMenuOpen={setIsSubMenuOpen}
                      />
                    )}
                </>
              )
            })}
        </div>
        <div>
          {ctaMenuItem ? (
            isHomePage ? (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <Link
                key="cta"
                activeStyle={{ borderColor: '#ffffff' }}
                to={`${ctaMenuItem.link}`}
                className="inline-block text-sm px-4 py-2 leading-none border text-slate-200 border-slate-500 hover:border-transparent hover:text-black hover:bg-white my-4 md:my-0"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                {ctaMenuItem.name}
              </Link>
            ) : (
              <HashLink
                className="inline-block text-sm px-4 py-2 leading-none border text-slate-200 border-slate-500 hover:border-transparent hover:text-black hover:bg-white my-4 md:my-0"
                smooth
                to={
                  locale
                    ? `${locale}/#${ctaMenuItem.link}`
                    : `/#${ctaMenuItem.link}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {ctaMenuItem.name}
              </HashLink>
            )
          ) : null}
        </div>
        <div className="md:ml-4">
          <HashLink
            smooth
            to={locale ? currentPath : `/${locales.spain}${currentPath}`}
            onClick={() => setMenuOpen(false)}
          >
            {locale ? <EnglishFlag /> : <SpanishFlag />}
          </HashLink>
        </div>
      </div>
      {!isMobile && (
        <div
          className={classNames(
            'absolute top-20 left-28 text-sm text-slate-200/75 bg-slate-900 bg-opacity-80 flex flex-col opacity-0 ease-in duration-200 max-h-0',
            { 'opacity-100 max-h-96 p-5': isSubMenuOpen }
          )}
        >
          {projectsContent &&
            projectsContent.length > 0 &&
            projectsContent.map((project, idx) => {
              const { title, slug } = project
              const isCurrent = location.pathname?.includes(slug)

              return !isSubMenuOpen ? null : (
                <HashLink
                  key={idx}
                  smooth
                  to={
                    locale
                      ? `/${locale}/projects/${slug}#top`
                      : `/projects/${slug}#top`
                  }
                  className={
                    isCurrent ? 'text-white mb-2' : 'hover:text-white mb-2'
                  }
                  onClick={() => {
                    setMenuOpen(false)
                    setIsSubMenuOpen(false)
                  }}
                >
                  {title}
                </HashLink>
              )
            })}
        </div>
      )}
    </nav>
  )
}
