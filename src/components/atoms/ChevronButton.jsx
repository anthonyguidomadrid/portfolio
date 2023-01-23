import classNames from 'classnames'
import { ReactComponent as Chevron } from '../../assets/Chevron.svg'


export const ChevronButton = ({setIsSubMenuOpen, isSubMenuOpen}) => {
    return <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <Chevron className={classNames('mr-4 ml-2 h-2 w-2 text-slate-200/75 mb-1.5 md:mb-0', {'rotate-270' : !isSubMenuOpen})}/>
    </button>
}
