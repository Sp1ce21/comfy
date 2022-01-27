import { useState } from 'react'
import s from './ProductItem.module.css'

type Props = {
    image: string
    price: number
    title: string
    isBasket: boolean
    id: number

    getProductByIdAC: (productId: number) => void
}

const ProductItem: React.FC<Props> = ({ image, price, title, isBasket, getProductByIdAC, id }) => {

    let [isButton, setIsButton] = useState(false)

    return (
        <div className={s.item} onMouseEnter={() => { !isBasket && setIsButton(true) }} onMouseLeave={() => { !isBasket && setIsButton(false) }} >
            <div className={s.column}>
                <div className={s.imgContainer}>
                    {isButton && <div className={s.button} onClick={()=>getProductByIdAC(id)}>Add to cart</div>}
                    <img src={image} alt="" />
                </div>
                <div className={s.title}>{title}</div>
            </div>
            <div className={s.price}>${price}</div>
        </div>
    )
}

export default ProductItem;