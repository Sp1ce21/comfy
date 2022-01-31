import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

type Props = {
    logoStyleColor: string
}

const Navigation: React.FC<Props> = ({ logoStyleColor }) => {
    return (
        <nav>
            <ul className={s.row}>
                <li>
                    <NavLink to='/home' className={s.link} style={{ color: `${logoStyleColor}` }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className={s.link} style={{ color: `${logoStyleColor}` }}>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={s.link} style={{ color: `${logoStyleColor}` }}>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;