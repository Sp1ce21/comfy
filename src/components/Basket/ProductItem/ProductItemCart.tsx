import { productsObject } from '../../../redux/products-reducer';
import s from './ProductItemCart.module.css'

type Props = {
    product: productsObject
}

const ProductItemCart: React.FC<Props> = ({ product }) => {
debugger
    return (
        <div className={s.item}>
            {product.id}
        </div>
    )
}

export default ProductItemCart;