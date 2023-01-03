import { useEffect, useState } from 'react'
import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import { useIsFirstRender } from '../../customHooks/useIsFirstRender' 
import classNames from 'classnames'

export const Stack = ({stackContent}) => {
    const {title, subtitle, technologies} = stackContent
    const id = removeEmptySpaceAndHighCase(title)
    const isFirstRender = useIsFirstRender()
    const [isAccordionOpen, setAccordionOpen] = useState(null)

    useEffect(() => {
        if (isFirstRender && technologies.length > 0) {
            return setAccordionOpen(technologies.reduce((o, key) => ({ ...o, [key.title]: false}), {})) 
        }
    }, [isFirstRender, technologies])

    const handleAccordionClick = (item) => {
        const obj = {...isAccordionOpen}
        obj[item] = !obj[item]
        return setAccordionOpen(obj)
    }

    return (
        <section className='bg-slate-900 text-white px-10 md:px-24'>
            {title && <div id={id} className='text-center py-14'>
                <h2 className='uppercase font-bold text-xl'>{title}</h2>
                {subtitle && <p className='font-mono font-semibold md:text-2xl mt-7'>{subtitle}</p>}
            </div>}
            <div className="flex flex-col">
                {technologies?.map((item, idx) => {
                    const { title, techList } = item
                    return (
                        <div key={idx}>
                            <div className='flex justify-between'>
                                <p>{title}</p>
                                <button onClick={() => handleAccordionClick(title)}>click</button>
                            </div>
                            {console.log('isAccordionOpen', isAccordionOpen, 'isAccordionOpen?.[title]', isAccordionOpen?.[title])}
                            {techList?.length > 0 && <div className={classNames('flex flex-col', {'hidden' : !isAccordionOpen?.[title]})}>{techList.map((item, idx) => {
                                return <span key={idx}>{item}</span>
                            })}</div>}
                        </div>
                    )
                })}        
            </div>
        </section>
    )
}