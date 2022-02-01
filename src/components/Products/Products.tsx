import PageName from '../../common/PageName/PageName';
import Preloader from '../../common/Preloader/Preloader';
import ProductItemContainer from '../../common/ProductItem/ProductItemContainer';
import { productsObject } from '../../redux/products-reducer';
import FilterContainer from './Filter/FilterContainer';
import s from './Products.module.css'

type Props = {
    products: Array<productsObject>
    isFetching: boolean
}

const Products: React.FC<Props> = ({ products, isFetching }) => {

    return (
        <main className={s.main}>
            <PageName name='Products' />
            <div className='container'>
                <div className={s.row}>
                    <FilterContainer />
                    {isFetching
                        ? <Preloader />
                        : <div className={s.items}>
                            {products.length !== 0 && products.map((product, index) => <ProductItemContainer key={index} product={product} />)}
                            {products.length === 0 && <div className={s.title}>There aren't items. Try to change your filters</div>}
                        </div>}
                </div>
            </div>
        </main>
    )
}

export default Products;