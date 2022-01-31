import PageName from '../../common/PageName/PageName';
import ProductItemContainer from '../../common/ProductItem/ProductItemContainer';
import { productsObject } from '../../redux/products-reducer';
import FilterContainer from './Filter/FilterContainer';
import s from './Products.module.css'

type Props = {
    products: Array<productsObject>
    addedProducts: any
}

const Products: React.FC<Props> = ({ products }) => {


    return (
        <main className={s.main}>
            <PageName name='Products' />
            <div className='container'>
                <div className={s.row}>
                    <FilterContainer />
                    <div className={s.items}>
                        {products.length !== 0 && products.map((product, index) => <ProductItemContainer key={index} product={product} />)}
                        {products.length === 0 && <div className={s.title}>There aren't items. Try to change your filters</div>}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products;