import { Header } from './Header'
import { About } from './About'

export const Home = ({pageContent}) => {
    return (
        <>
            <Header headerContent={pageContent?.header}/>
            {Object.keys(pageContent?.about).length > 0 && <About aboutContent={pageContent?.about}/>}
        </>
    )
}