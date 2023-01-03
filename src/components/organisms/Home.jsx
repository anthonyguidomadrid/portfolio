import { Header } from '../molecules/Header'
import { About } from '../molecules/About'
import { ProjectSlider } from '../molecules/ProjectSlider'
import { Stack } from '../molecules/Stack'

export const Home = ({pageContent}) => {
    return (
        <>
            <Header headerContent={pageContent?.header}/>
            {pageContent?.about && <About aboutContent={pageContent?.about}/>}
            {pageContent?.project && <ProjectSlider projectContent={pageContent?.project}/>}
            {pageContent?.stack && <Stack stackContent={pageContent?.stack}/>}
        </>
    )
}