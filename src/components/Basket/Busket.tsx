import { useEffect, useLayoutEffect, useState } from 'react';
import s from './Busket.module.css'
import ProductItemCart from './ProductItemCart/ProductItemCart';

type Props = {
    addedProducts: any
    totalPrice: number

    setIsBasket: (isBasket: boolean) => void
    clearAddedProducts: () => void
    setTotalPrice: (totalPrice: number) => void
}

const Busket: React.FC<Props> = ({ setIsBasket, addedProducts, totalPrice, clearAddedProducts, setTotalPrice }) => {

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
                    {addedProducts !== null && <div>
                        <div className={s.items}>
                            {addedProducts.map((product: any, index: number) => {
                                return <ProductItemCart product={product} key={index} setTotalPrice={setTotalPrice} />
                            })}
                        </div>
                    </div>
                    }
                </div>
                <div>
                    {addedProducts.length !== 0 && <div className={s.clearButton} onClick={() => { localStorage.clear(); clearAddedProducts() }}>Clear basket</div>}
                    <div className={s.downBlock}>
                        <div className={s.totalPrice}>Total: ${Math.ceil(totalPrice)}</div>
                        <div className={s.checkoutButton}>checkout</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Busket;