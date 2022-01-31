import { useEffect, useState } from 'react'
import { productsObject } from '../../redux/products-reducer'
import s from './ProductItem.module.css'

type Props = {
    product: productsObject
    isBasket: boolean
    addedProducts: any

    setAddedProducts: (product: productsObject) => void
}

const ProductItem: React.FC<Props> = ({ isBasket, setAddedProducts, product, addedProducts }) => {


    let [isButton, setIsButton] = useState(false)


    return (
        <div className={s.item} onMouseEnter={() => { !isBasket && setIsButton(true) }} onMouseLeave={() => { !isBasket && setIsButton(false) }} >
            <div className={s.column}>
                <div className={s.imgContainer}>
                    {addedProducts.length !== 0 ? addedProducts.map((addedProduct: productsObject) => {
                        return (
                            addedProduct.id === product.id && isButton && <div className={s.button}>Added</div> 
                            || 
                            isButton && <div className={s.button} onClick={() => { setAddedProducts(product) }}>Add to cart</div>
                        )
                    })
                        : isButton && <div className={s.button} onClick={() => { setAddedProducts(product) }}>Add to cart</div>
                    }
                    <img src={product.image} alt="Product image" />
                </div>
                <div className={s.title}>{product.title}</div>
            </div>
            <div className={s.price}>${product.price}</div>
        </div>
    )
}

export default ProductItem;