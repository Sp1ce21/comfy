import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul className={s.row}>
                <li>
                    <NavLink to='/home' className={s.link}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className={s.link}>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={s.link}>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;