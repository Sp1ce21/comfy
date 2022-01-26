import s from './Header.module.css'
import Navigation from './Navigation/Navigation'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
import cart from '../../assets/images/cart.svg'
import { Props } from './HeaderContainer';

const Header: React.FC<Props> = ({setIsBasket}) => {
    return (
        <header className={s.header}>
            <Navigation/>
            <NavLink to='' className={s.row}><img src={logo} alt="logo" className={s.image}/></NavLink>
            <div className={s.container}><img src={cart} alt="cart" onClick={()=>setIsBasket(true)}/></div>
        </header>
    )
}

export default Header;