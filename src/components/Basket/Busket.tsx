import { useEffect, useState } from 'react';
import s from './Busket.module.css'
import { Props } from './BusketContainer';

const Busket: React.FC<Props> = ({ setIsBasket }) => {

    let [myTimeout, setMyTimeout] = useState(true)
    let [isActiveBasket, setIsActiveBasket] = useState(false)

    useEffect(() => {
        if (myTimeout) {
            setTimeout(() => {
                setMyTimeout(false)
                setIsActiveBasket(true)
            }, 100);
        }
    })

    return (
        <div className={isActiveBasket ? s.active : s.busket}>
            hello!
        </div>
    )
}

export default Busket;