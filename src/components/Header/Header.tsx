import s from './Header.module.css'
import Navigation from './Navigation/Navigation'
import { NavLink } from 'react-router-dom';

type Props = {
    addedProducts: any
    logoStyleColor: string

    setIsBasket: (isBasket: boolean) => void
}

const Header: React.FC<Props> = ({ setIsBasket, addedProducts, logoStyleColor }) => {



    return (
        <header className={s.header}>
            <Navigation logoStyleColor={logoStyleColor} />
            <NavLink to='/home' className={s.logo} style={{ color: `${logoStyleColor}` }}>Comfy</NavLink>
            <div className={s.container}>
                {addedProducts.length !== 0 && <div className={s.circle}>{addedProducts.length}</div>}
                <symbol className={s.basket} onClick={() => setIsBasket(true)}><svg style={{ fill: `${logoStyleColor}` }} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" /><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></svg></symbol>
            </div>
        </header>
    )
}

export default Header;