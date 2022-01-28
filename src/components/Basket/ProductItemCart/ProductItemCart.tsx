import { productsObject } from '../../../redux/products-reducer';
import s from './ProductItemCart.module.css'
import arrow from '../../../assets/images/arrow.svg'

type Props = {
    product: productsObject
}

const ProductItemCart: React.FC<Props> = ({ product }) => {

    return (
        <div className={s.item}>
            <div className={s.row}>
                <div className={s.imgContainer}><img src={product.image} alt="" /></div>
                <div className={s.column}>
                    <div className={s.infoColumn}>
                        <div className={s.title}>{product.title}</div>
                        <div className={s.price}>${product.price}</div>
                    </div>
                    <div className={s.button} onClick={()=> { localStorage.removeItem(`product${product.id}`); }}>remove</div>
                </div>
            </div>
            <div className={s.container}>
                <div className={s.arrows}>
                    <img src={arrow} alt='' className={s.up}></img>
                    <div className={s.count}>1</div>
                    <img src={arrow} alt='' className={s.down}></img>
                </div>
            </div>
        </div>
    )
}

export default ProductItemCart;