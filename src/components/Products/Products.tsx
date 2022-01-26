import PageName from '../../common/PageName/PageName';
import ProductItem from '../../common/ProductItem/ProductItem';
import { productsObject } from '../../redux/products-reducer';
import FilterContainer from './Filter/FilterContainer';
import s from './Products.module.css'

type Props = {
    products: Array<productsObject>
}

const Products: React.FC<Props> = ({ products }) => {
    debugger
    return (
        <main className={s.main}>
            <PageName name='Products' />
            <div className='container'>
                <div className={s.row}>
                    <FilterContainer />
                    <div className={s.items}>
                    { products.length !== 0 && products.map(product => <ProductItem image={product.image} title={product.title} price={product.price}/>)}
                    {/* <ProductItem image={products[0].image} title={products[0].title} price={products[0].price}/> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products;