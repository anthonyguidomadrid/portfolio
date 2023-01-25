import type { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { HashLink } from 'react-router-hash-link'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { NormalizedProject } from '~types/normalizedContentTypes'

export type MobileSubMenuProps = {
  projectsContent: NormalizedProject[]
  locale: string
  isSubMenuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
  setIsSubMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileSubMenu: FunctionComponent<MobileSubMenuProps> = ({
  projectsContent,
  locale,
  isSubMenuOpen,
  setMenuOpen,
  setIsSubMenuOpen
}) => {
  const location = useLocation()
  return (
    <div
      className={classNames(
        'text-xs text-slate-200/75 flex flex-col opacity-0 max-h-0 transition-all duration-1000',
        { 'max-h-96 opacity-100': isSubMenuOpen }
      )}
    >
      {projectsContent.length > 0 &&
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
                isCurrent ? 'text-white mt-2' : 'hover:text-white mt-2'
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
  )
}
