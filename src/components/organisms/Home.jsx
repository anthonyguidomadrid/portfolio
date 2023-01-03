import { Header } from '../molecules/Header'
import { About } from '../molecules/About'
import { ProjectSlider } from '../molecules/ProjectSlider'
import { Stack } from '../molecules/Stack'

export const Home = ({pageContent}) => {
    return (
        <>
            <Header headerContent={pageContent?.header}/>
            {Object.keys(pageContent?.about).length > 0 && <About aboutContent={pageContent?.about}/>}
            {Object.keys(pageContent?.project).length > 0 && <ProjectSlider projectContent={pageContent?.project}/>}
            {Object.keys(pageContent?.stack).length > 0 && <Stack stackContent={pageContent?.stack}/>}
        </>
    )
}