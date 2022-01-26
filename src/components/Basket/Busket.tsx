import { useEffect, useState } from 'react';
import s from './Busket.module.css'
import { Props } from './BusketContainer';

const Busket: React.FC<Props> = ({ setIsBasket }) => {

    let [myTimeoutOpen, setMyTimeoutOpen] = useState(true)
    let [isActiveBasket, setIsActiveBasket] = useState(false)

    useEffect(() => {
        if (myTimeoutOpen) {
            setTimeout(() => {
                setMyTimeoutOpen(false)
                setIsActiveBasket(true)
            }, 100);
        }
    })

    return (
        <div className={isActiveBasket ? s.active : s.busket}>
            <div className={s.margin}>
                <div className={s.button} onClick={()=>setIsBasket(false)}>
                    <span className={s.first}></span>
                    <span className={s.second}></span>
                </div>
            </div>
            <div className={s.column}>
                <h2 className={s.title}>Your Bag</h2>
                <div className={s.items}></div>
            </div>
        </div>
    )
}

export default Busket;