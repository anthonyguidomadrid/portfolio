import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { HashLink as Link } from 'react-router-hash-link'
import { FunctionComponent } from 'react'
import { NormalizedProjectObject } from '~types/normalizedContentTypes'

export type ProjectSliderProps = {
  projectContent: NormalizedProjectObject
}

export const ProjectSlider: FunctionComponent<ProjectSliderProps> = ({
  projectContent
}) => {
  const { title, subtitle, id } = projectContent

  return (
    <section id={id} data-testid="project-slider">
      {title && (
        <div className="text-center text-slate-900 my-14 px-10 md:px-24">
          <h2 className="uppercase font-bold text-xl">{title}</h2>
          {subtitle && (
            <p className="font-mono text-4xl text-gray-500 my-5 lg:pb-5 mt-7">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <Splide
        options={{
          type: 'fade',
          rewind: true
        }}
      >
        {projectContent?.projects?.map((project, idx) => {
          const { thumbnail, creationDate, slug, title, tags } = project
          return (
            <SplideSlide key={idx}>
              <div
                style={{
                  backgroundColor: '#bfbfbf',
                  backgroundBlendMode: 'multiply',
                  backgroundImage: `url(${
                    thumbnail?.url ?? '../../default-banner-image.jpeg'
                  })`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="text-white px-20 h-96 flex flex-col justify-center drop-shadow transition-transform duration-500 hover:opacity-95"
              >
                <Link
                  smooth
                  to={`projects/${slug}#top`}
                  className="py-12 md:py-24"
                >
                  {creationDate && <p className="mb-2">{creationDate}</p>}
                  {title && (
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-6">
                      {title}
                    </h4>
                  )}
                  {tags?.length > 0 && (
                    <div className="border-b border-slate-400 pb-3 grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-2">
                      {tags.map((tag, idx) => {
                        return (
                          <span key={idx} className="text-sm font-medium">
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  )}
                </Link>
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </section>
  )
}
