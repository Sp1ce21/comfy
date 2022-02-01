import { useEffect } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProductItemContainer from '../../common/ProductItem/ProductItemContainer';
import Title from '../../common/Title/Title';
import { productsObject } from '../../redux/products-reducer';
import HeaderContainer from '../Header/HeaderContainer';
import s from './Home.module.css'

type Props = {
    products: Array<productsObject>
    isFetching: boolean

    setIsAllProducts: () => void
}

const Home: React.FC<Props> = ({ products, isFetching, setIsAllProducts }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.mainScrean}>
                <div className='container'>
                    <HeaderContainer logoStyleColor='#fff' />
                    <div className={s.titles}>
                        <h1>Rest, Relax, Unwind</h1>
                        <h2>Embrace your choises - we do</h2>
                        <a href="">Show now</a>
                    </div>
                </div>
            </div>
            <main className={s.main}>
                <Title title='Featured' />
                {isFetching
                    ? <Preloader />
                    : <div className={s.products}>
                        {products.length !== 0 && products.map((product, index) => <ProductItemContainer key={index} product={product} />)}
                        {products.length === 0 && <div className={s.title}>There aren't items. Try to change your filters</div>}
                    </div>
                }
                <button className={s.button} onClick={() => { setIsAllProducts() }}>{ products.length === 3 ? 'All products' : 'Hide products'}</button>
            </main>
        </div>
    )
}

export default Home;