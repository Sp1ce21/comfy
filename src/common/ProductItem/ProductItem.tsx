import s from './ProductItem.module.css'

type Props = {
    image: string
    price: number
    title: string
}

const ProductItem: React.FC<Props> = ({ image, price, title }) => {
    debugger
    return (
        <div className={s.item}>
            <div className={s.imgContainer}><img src={image} alt="" /></div>
            <div className={s.title}>{title}</div>
            <div className={s.price}>${price}</div>
        </div>
    )
}

export default ProductItem;