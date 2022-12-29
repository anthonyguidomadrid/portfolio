import { Header } from './Header'

export const Home = ({pageContent}) => {
    return (
        <>
            <Header headerContent={pageContent?.header}/>
        </>
    )
}