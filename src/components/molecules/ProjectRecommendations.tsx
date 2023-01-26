import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getTranslationFromString } from '../../helpers/getTranslationFromString'
import { HashLink as Link } from 'react-router-hash-link'
import { useBreakpoint } from '../../customHooks/useBreakpoint'
import { NormalizedProject, Translation } from '~types/normalizedContentTypes'
import { FunctionComponent } from 'react'

export type ProjectRecommendationsProps = {
  translations: Translation[] | undefined
  selectedProject: NormalizedProject | Record<string, never>
  projectsContent: NormalizedProject[] | undefined
  locale: string | undefined
}

export const ProjectRecommendations: FunctionComponent<
  ProjectRecommendationsProps
> = ({ translations, selectedProject, projectsContent, locale }) => {
  const recommendedProjects = projectsContent?.filter(
    project => project.slug !== selectedProject?.slug
  )
  const point = useBreakpoint()
  const isMobile = point === 'sm'

  return (
    <section className="p-10 border-t">
      <h3 className="uppercase font-bold text-lg text-center mb-5">
        {getTranslationFromString(
          'project-details.recommendations.title',
          translations
        )}
      </h3>
      <Splide
        options={{
          perPage: isMobile ? 1 : 2,
          height: '15rem',
          rewind: true,
          gap: '1rem'
        }}
      >
        {recommendedProjects &&
          recommendedProjects.map((project, idx) => {
            const { thumbnail, slug, title, subtitle } = project
            return (
              <SplideSlide key={idx}>
                <Link
                  smooth
                  to={
                    locale
                      ? `/${locale}/projects/${slug}#top`
                      : `/projects/${slug}#top`
                  }
                >
                  <div
                    style={{
                      backgroundColor: '#d0d0d0',
                      backgroundBlendMode: 'multiply',
                      backgroundImage: `url(${
                        thumbnail?.url ?? '../../default-banner-image.jpeg'
                      })`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    className="text-white px-20 h-full flex flex-col justify-center drop-shadow transition-transform duration-500 hover:opacity-95"
                  >
                    {title && (
                      <h4 className="text-2xl md:text-3xl font-bold font-mono">
                        {title}
                      </h4>
                    )}
                    {subtitle && (
                      <p className="text-sm md:text-base uppercase mt-3">
                        {subtitle}
                      </p>
                    )}
                  </div>
                </Link>
              </SplideSlide>
            )
          })}
      </Splide>
    </section>
  )
}
