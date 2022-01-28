import { useState } from 'react'
import { productsObject } from '../../redux/products-reducer'
import s from './ProductItem.module.css'

type Props = {
    isBasket: boolean
    product: productsObject
    addedProducts: any

    setAddedProducts: (product: productsObject) => void
}

const ProductItem: React.FC<Props> = ({ isBasket, setAddedProducts, product, addedProducts }) => {

    let [isButton, setIsButton] = useState(false)

    return (
        <div className={s.item} onMouseEnter={() => { !isBasket && setIsButton(true) }} onMouseLeave={() => { !isBasket && setIsButton(false) }} >
            <div className={s.column}>
                <div className={s.imgContainer}>
                    {isButton && <div className={s.button} onClick={() => { setAddedProducts(product) }}>Add to cart</div>}
                    <img src={product.image} alt="" />
                </div>
                <div className={s.title}>{product.title}</div>
            </div>
            <div className={s.price}>${product.price}</div>
        </div>
    )
}

export default ProductItem;