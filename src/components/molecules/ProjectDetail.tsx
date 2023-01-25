import { Button } from '../atoms/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getTranslationFromString } from '../../helpers/getTranslationFromString'
import { FunctionComponent } from 'react'
import { NormalizedProject, Translation } from '~types/normalizedContentTypes'

export type ProjectDetail = {
  projectContent: NormalizedProject | Record<string, never>
  translations: Translation[]
}

export const ProjectDetail: FunctionComponent<ProjectDetail> = ({
  projectContent,
  translations
}) => {
  const {
    codeSourceLink,
    creationDate,
    description,
    images,
    projectLink,
    tags,
    title,
    subtitle
  } = projectContent

  return (
    <section className="lg:flex items-center">
      <div className="lg:w-1/2">
        {images.length > 0 && (
          <Splide
            options={{
              rewind: true
            }}
          >
            {images.map((image, idx) => {
              const { url, description } = image
              return (
                <SplideSlide key={idx}>
                  <img src={url} alt={description} />
                </SplideSlide>
              )
            })}
          </Splide>
        )}
      </div>
      <div className="lg:w-1/2 p-10 flex justify-center flex-col">
        {creationDate && <p className="text-sm pb-3">{creationDate}</p>}
        {title && <h2 className="uppercase font-bold text-xl">{title}</h2>}
        {subtitle && (
          <p
            className={
              'font-mono text-2xl lg:text-3xl text-gray-500 my-5 lg:pb-5'
            }
          >
            {subtitle}
          </p>
        )}
        {description && (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex py-5">
          {projectLink && (
            <Button
              text={getTranslationFromString(
                'project-details.cta.project',
                translations
              )}
              link={projectLink}
              newTab={true}
              additionalClasses={'uppercase mr-4'}
              variant={'black'}
            />
          )}
          {codeSourceLink && (
            <Button
              text={getTranslationFromString(
                'project-details.cta.code',
                translations
              )}
              link={codeSourceLink}
              newTab={true}
              additionalClasses={'uppercase'}
              variant={'black'}
            />
          )}
        </div>
        {tags.length > 0 && <p className="italic">Tags: {tags.join(', ')}</p>}
      </div>
    </section>
  )
}
