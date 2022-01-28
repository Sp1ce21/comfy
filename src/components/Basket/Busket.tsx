import { useEffect, useState } from 'react';
import s from './Busket.module.css'
import ProductItemCart from './ProductItemCart/ProductItemCart';

type Props = {
    addedProducts: any

    setIsBasket: (isBasket: boolean) => void
}

const Busket: React.FC<Props> = ({ setIsBasket, addedProducts }) => {

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



    return (
        <div className={isActiveBasket ? s.active : s.busket}>
            <div className={s.margin}>
                <div className={s.button} onClick={() => setIsBasket(false)}>
                    <span className={s.first}></span>
                    <span className={s.second}></span>
                </div>
            </div>
            <div className={s.column}>
                <div className={s.itemsColumn}>
                    <h2 className={s.title}>Your Bag</h2>
                    <div className={s.items}>
                        {addedProducts !== null && addedProducts.map((product: any, index: number) => {
                            return <ProductItemCart product={product} key={index} />
                        })}
                    </div>
                </div>
                <div className={s.downBlock}>
                    <div className={s.totalPrice}>Total: ${ }</div>
                    <div className={s.checkoutButton}>checkout</div>
                </div>
            </div>
        </div >
    )
}

export default Busket;