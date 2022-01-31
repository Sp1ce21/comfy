import { useEffect, useState } from 'react'
import { productsObject } from '../../redux/products-reducer'
import s from './ProductItem.module.css'

type Props = {
    product: productsObject
    isBasket: boolean
    addedProducts: any

    setAddedProducts: (product: productsObject) => void
    getProductById: (currentItemId: number) => void
}

const ProductItem: React.FC<Props> = ({ isBasket, setAddedProducts, product, addedProducts, getProductById }) => {


    let [isButton, setIsButton] = useState(false)


    const openNewWindow = () => {
        window.open(`products/${product.id}`)
    }

    return (
        <div className={s.item} onMouseEnter={() => { !isBasket && setIsButton(true) }} onMouseLeave={() => { !isBasket && setIsButton(false) }} >
            <div className={s.column}>
                <div className={s.imgContainer}>
                    {addedProducts.length !== 0

                        ? addedProducts.map((addedProduct: productsObject) => {
                            return (
                                addedProduct.id === product.id && isButton && <div className={s.button}>Added</div>
                                // ||
                                // isButton && <div className={s.button} onClick={() => { setAddedProducts(product) }}>Add to cart</div>
                            )
                        })
                        : isButton && <div className={s.button} onClick={() => { setAddedProducts(product) }}>Add to cart</div>

                    }
                    <img src={product.image} alt="Product image" onClick={() =>{ getProductById(product.id); openNewWindow()}} />
                </div>
                <div onClick={() => { getProductById(product.id); openNewWindow()}} className={s.title}>{product.title}</div>
            </div>
            <div className={s.price}>${product.price}</div>
        </div>
    )
}

export default ProductItem;