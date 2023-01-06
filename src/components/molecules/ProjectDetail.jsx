import { Button } from '../atoms/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const ProjectDetail = ({projectContent}) => {
    const { codeSourceLink, creationDate, description, images, projectLink, tags, title, subtitle} = projectContent

    return (
        <section className="md:flex">
            <div className="md:w-1/2">
                {images.length > 0 && 
                <Splide>
                    {images.map((image, idx) => {
                        const { url, description } = image
                        return (
                            <SplideSlide key={idx} options={ {
                                cover: true,
                                height: 'auto',
                                fixedHeight: 'auto'
                            } }>
                                <img src={url} alt={description}/>
                            </SplideSlide>
                        )
                    })}
                </Splide>}
            </div>
            <div className="md:w-1/2 p-10 flex justify-center flex-col">
                {creationDate && <p className='text-sm pb-3'>{creationDate}</p>}
                {title && <h2 className="uppercase font-bold text-xl">{title}</h2>}
                {subtitle && <p className={'font-mono text-2xl lg:text-3xl text-gray-500 my-5 lg:pb-5'}>{subtitle}</p>}
                {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
                <div className='flex py-5'>
                    {projectLink && <Button text={'See Project'} link={projectLink} newTab={true} additionalClasses={'uppercase mr-4'} variant={'black'}/>}
                    {codeSourceLink && <Button text={'See Code'} link={codeSourceLink} newTab={true} additionalClasses={'uppercase'} variant={'black'}/>}
                </div>
                {tags.length > 0 && <p className='italic'>Tags: {tags.join(', ')}</p>}
            </div>
        </section>
    )
}