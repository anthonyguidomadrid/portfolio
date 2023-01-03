import { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'

export const About = ({aboutContent}) => {
    const { title, subtitle, image, description, cv } = aboutContent
    const id = removeEmptySpaceAndHighCase(title)

    const [skill, setSkill] = useState(subtitle?.[0])

    useEffect(() => {
        if (subtitle?.length > 0) {
            let count = 1
            const cycleArray = () => {
                let selectedSkill = subtitle[count]
                setSkill(selectedSkill)
                count++
                if (count === subtitle.length) {
                    count = 0
                }
            }
            setInterval(cycleArray, 3000)
        }
    }, [subtitle])


    return (
    <section className="md:flex" id={id}>
        <div style={{backgroundImage: `url(${image?.url ?? '../../default-banner-image.jpeg'})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="md:w-1/2 h-96 md:h-auto"></div>
        <div className="md:w-1/2 bg-slate-900 p-10 flex justify-center text-white flex-col">
            <h2 className="uppercase font-bold text-xl">{title}</h2>
            <p className={'transition duration-500 ease-in-out font-mono text-4xl text-gray-100 my-5'}>{skill}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {cv?.url && <div><Button text={cv?.text ?? 'Download'} link={cv?.url} newTab={true} AdditionalClasses={'uppercase mt-5'}/></div>}
        </div>
    </section>
    )
}