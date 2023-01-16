import { Header } from '../molecules/Header'

export const NotFound = ({headerContent}) => {
    return (
        <Header headerContent={headerContent.find(header => header.type === 'notFound')}/>
    )
}