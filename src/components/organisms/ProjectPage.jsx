import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MoonLoader from "react-spinners/ClipLoader"
import { Header } from '../molecules/Header'
import { ProjectDetail } from '../molecules/ProjectDetail'

export const ProjectPage = ({projectsContent, setLocale}) => {
    const { id, locale } = useParams()
    const [ selectedProject, setSelectedProject ] = useState(undefined)
    const navigate = useNavigate()
    useEffect(() => {
        setLocale(locale)
    }, [locale, setLocale])

    useEffect(() => {
        if (id) {
            const queriedProject = projectsContent.find(project => {
                return project.slug === id
            })
            if (queriedProject) {
                setSelectedProject(queriedProject)
            } else {
                navigate("/404")
            }
        }
    }, [id, navigate, projectsContent])

    if (!selectedProject) {
        return (
          <div className="grid place-items-center h-screen">
            <MoonLoader
              size={120}
            />
          </div>
          )
      }

    return (
        <>
            <Header headerContent={selectedProject} isFullSize={false} displayBackBtn={true} locale={locale}/>
            <ProjectDetail projectContent={selectedProject}/>
        </>
    )
}