import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MoonLoader from 'react-spinners/ClipLoader'
import {
  NormalizedMenuItem,
  NormalizedProject,
  NormalizedTranslation
} from '~types/normalizedContentTypes'
import { Header } from '../molecules/Header'
import { ProjectDetail } from '../molecules/ProjectDetail'
import { ProjectRecommendations } from '../molecules/ProjectRecommendations'
import ReactGA from 'react-ga4'

export type ProjectPageProps = {
  projectsContent: NormalizedProject[] | undefined
  setLocale: Dispatch<SetStateAction<string | undefined>>
  translations: NormalizedTranslation[] | undefined
  menuItems: NormalizedMenuItem[] | undefined
}

export const ProjectPage: FunctionComponent<ProjectPageProps> = ({
  projectsContent,
  setLocale,
  translations,
  menuItems
}) => {
  const { id, locale } = useParams()
  const [selectedProject, setSelectedProject] = useState<
    NormalizedProject | Record<string, never>
  >({})
  const navigate = useNavigate()
  useEffect(() => {
    setLocale(locale)
  }, [locale, setLocale])

  useEffect(() => {
    if (id) {
      const queriedProject =
        projectsContent &&
        projectsContent.find(project => {
          return project.slug === id
        })
      if (queriedProject) {
        setSelectedProject(queriedProject)
      } else {
        navigate('/404')
      }
    }
  }, [id, navigate, projectsContent])

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: `${locale ?? ''}/projects/${selectedProject?.slug}`
    })
  }, [])

  if (!selectedProject) {
    return (
      <div className="grid place-items-center h-screen">
        <MoonLoader size={120} />
      </div>
    )
  }

  return (
    <>
      <Header
        headerContent={selectedProject}
        isFullSize={false}
        displayBackBtn={true}
        locale={locale}
        menuItems={menuItems}
      />
      <ProjectDetail
        projectContent={selectedProject}
        translations={translations}
      />
      <ProjectRecommendations
        translations={translations}
        selectedProject={selectedProject}
        projectsContent={projectsContent}
        locale={locale}
      />
    </>
  )
}
