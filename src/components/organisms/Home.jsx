import { Header } from '../molecules/Header'
import { About } from '../molecules/About'
import { ProjectSlider } from '../molecules/ProjectSlider'
import { Stack } from '../molecules/Stack'
import { Contact } from '../molecules/Contact'

export const Home = ({pageContent}) => {
    return (
        <>
            <Header headerContent={pageContent?.headers.find(header => header.type === 'home')}/>
            {pageContent?.about && <About aboutContent={pageContent?.about}/>}
            {pageContent?.project && <ProjectSlider projectContent={pageContent?.project}/>}
            {pageContent?.stack && <Stack stackContent={pageContent?.stack}/>}
            {pageContent?.contact && <Contact contactContent={pageContent?.contact}/>}
        </>
    )
}