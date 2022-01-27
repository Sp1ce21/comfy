import { useEffect, useState } from 'react';
import s from './Busket.module.css'
import { Props } from './BusketContainer';
import ProductItemCart from './ProductItem/ProductItemCart';

const Busket: React.FC<Props> = ({ setIsBasket, addedProducts }) => {
    debugger
    let [myTimeoutOpen, setMyTimeoutOpen] = useState(true)
    let [isActiveBasket, setIsActiveBasket] = useState(false)

    useEffect(() => {
        if (myTimeoutOpen) {
            setTimeout(() => {
                setMyTimeoutOpen(false)
                setIsActiveBasket(true)
            }, 100);
        }
    }, [addedProducts])

    // localStorage.setItem('id', '1');
    // var a = localStorage.getItem('id');
    // alert(a)

    return (
        <div className={isActiveBasket ? s.active : s.busket}>
            <div className={s.margin}>
                <div className={s.button} onClick={() => setIsBasket(false)}>
                    <span className={s.first}></span>
                    <span className={s.second}></span>
                </div>
            </div>
            <div className={s.column}>
                <div>
                    <h2 className={s.title}>Your Bag</h2>
                    <div className={s.items}>
                        {addedProducts.length !== 0 && addedProducts.map((product, index) => {
                            return <ProductItemCart product={product} key={index} />
                        })}
                    </div>
                </div>
                <div className={s.downBlock}>
                    <div className={s.totalPrice}>Total: ${ }</div>
                    <div className={s.checkoutButton}>checkout</div>
                </div>
            </div>
        </div>
    )
}

export default Busket;