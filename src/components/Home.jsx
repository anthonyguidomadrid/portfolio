import { Header } from './Header'
import { About } from './About'
import { ProjectSlider } from './ProjectSlider'

export const Home = ({pageContent}) => {
    return (
        <>
            <Header headerContent={pageContent?.header}/>
            {Object.keys(pageContent?.about).length > 0 && <About aboutContent={pageContent?.about}/>}
            {pageContent?.projects?.length > 0 && <ProjectSlider projectContent={pageContent?.projects}/>}
        </>
    )
}