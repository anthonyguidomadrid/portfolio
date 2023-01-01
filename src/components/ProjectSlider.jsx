import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const ProjectSlider = ({projectContent}) => {
    return (
        <Splide>
            {projectContent.map(project => {
                const { thumbnail, creationDate, slug, title, tags, id } = project
                console.log('id', id)
                return (
                        <SplideSlide>
                            <a href={`/projects/${slug}`}>
                                <div id={id} style={{backgroundImage: `url(${thumbnail?.url ?? '../../default-banner-image.jpeg'})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="text-white px-20 h-96 flex flex-col justify-center drop-shadow transition-transform duration-500 hover:opacity-95">
                                    {creationDate && <p className='mb-2'>{creationDate}</p>}
                                    {title && <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-6'>{title}</h4>}
                                    {tags?.length > 0 && <div className='border-b border-slate-400 pb-3 grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-2'>{tags.map( tag => {
                                        return <span className='text-sm font-medium'>{tag}</span>
                                    })}</div>}
                                </div>
                            </a>
                        </SplideSlide>
                )
            })}  
         </Splide>
    )
}