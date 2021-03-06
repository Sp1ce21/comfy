import { productsObject } from '../../../redux/products-reducer';
import s from './ProductItemCart.module.css'
import arrow from '../../../assets/images/arrow.svg'
import { useEffect, useState } from 'react';

type Props = {
    product: productsObject

    setTotalPrice: (totalPrice: number) => void
    changeAddedProductsCallback: (id: number) => void
}

const ProductItemCart: React.FC<Props> = ({ product, setTotalPrice, changeAddedProductsCallback }) => {

    let [needSettotalPrice, setNeedSetTotalPrice] = useState(true)

    useEffect(() => {
        if (needSettotalPrice) {
            setTotalPrice(product.price)
            setNeedSetTotalPrice(false)
        }
    })


    return (
        <div className={s.item}>
            <div className={s.row}>
                <div className={s.imgContainer}><img src={product.image} alt="Product image" /></div>
                <div className={s.column}>
                    <div className={s.infoColumn}>
                        <div className={s.title}>{product.title}</div>
                        <div className={s.price}>${product.price}</div>
                    </div>
                    <div className={s.button} onClick={() => { changeAddedProductsCallback(product.id) }}>remove</div>
                </div>
            </div>
            <div className={s.container}>
                <div className={s.arrows}>
                    <img src={arrow} alt='Up arrow' className={s.up}></img>
                    <div className={s.count}>1</div>
                    <img src={arrow} alt='Down arrow' className={s.down}></img>
                </div>
            </div>
        </div>
    )
}

export default ProductItemCart;