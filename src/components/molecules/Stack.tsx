import { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import { useIsFirstRender } from '../../customHooks/useIsFirstRender'
import { ReactComponent as Chevron } from '../../assets/Chevron.svg'
import { NormalizedStack } from '~types/normalizedContentTypes'

export type StackProps = {
  stackContent: NormalizedStack
}

export const Stack: FunctionComponent<StackProps> = ({ stackContent }) => {
  const { id, title, subtitle, technologies } = stackContent
  const isFirstRender = useIsFirstRender()
  const [isAccordionOpen, setAccordionOpen] = useState(
    {} as { [key: string]: boolean }
  )

  useEffect(() => {
    if (isFirstRender && technologies.length > 0) {
      return setAccordionOpen(
        technologies.reduce(
          (o, key) => ({
            ...o,
            [removeEmptySpaceAndHighCase(key.title)]: false
          }),
          {}
        )
      )
    }
  }, [isFirstRender, technologies])

  const handleAccordionClick = (item: string) => {
    const key = removeEmptySpaceAndHighCase(item)
    const obj = { ...isAccordionOpen }
    obj[key] = !obj[key]
    return setAccordionOpen(obj)
  }

  return (
    <section
      id={id}
      className="bg-slate-900 text-white px-10 md:px-36 lg:px-48 xl:px-80 transition-all duration-500"
    >
      {title && (
        <div className="text-center py-14">
          <h2 className="uppercase font-bold text-xl">{title}</h2>
          {subtitle && (
            <p className="font-mono text-2xl text-gray-100 md:my-5 md:mx-24 mt-7">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="flex flex-col pb-16">
        {Object.keys(isAccordionOpen).length > 0 &&
          technologies?.map((item, idx) => {
            const { title, techList } = item
            const isOpen = isAccordionOpen?.[removeEmptySpaceAndHighCase(title)]
            return (
              <div
                key={idx}
                className={classNames({
                  'border-b': idx + 1 !== technologies.length
                })}
              >
                <div
                  tabIndex={idx}
                  role="button"
                  onKeyDown={() => handleAccordionClick(title)}
                  onClick={() => handleAccordionClick(title)}
                  className={classNames(
                    'flex justify-between p-5 transition-all duration-500',
                    { 'pb-10': isOpen }
                  )}
                >
                  <p className="font-extrabold text-lg">{title}</p>
                  <button>
                    <Chevron className={classNames({ 'rotate-270': isOpen })} />
                  </button>
                </div>
                {techList?.length > 0 && (
                  <div
                    className={classNames(
                      'grid grid-flow-col gap-4 overflow-hidden transition-all max-h-0 duration-500 px-5',
                      { 'max-h-96 pb-5': isOpen },
                      { 'sm:grid-rows-3': techList.length >= 3 },
                      { 'grid-rows-5': techList.length >= 5 },
                      { 'grid-rows-2': techList.length < 5 }
                    )}
                  >
                    {techList.map((item, idx) => (
                      <span className="mb-5" key={idx}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </section>
  )
}
