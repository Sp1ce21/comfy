import PageName from '../../common/PageName/PageName';
import { productsObject } from '../../redux/products-reducer';
import FilterContainer from './Filter/FilterContainer';
import s from './Products.module.css'

type Props = {
    products: Array<productsObject>
}

const Products: React.FC<Props> = ({ products }) => {
    return (
        <main className={s.main}>
            <PageName name='Products' />
            <div className='container'>
                <div className={s.row}>
                    <FilterContainer />
                </div>
            </div>
        </main>
    )
}

export default Products;