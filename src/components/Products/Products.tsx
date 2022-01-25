import PageName from '../../common/PageName/PageName';
import s from './Products.module.css'

const Products: React.FC = () => {
    return (
        <main className={s.main}>
            <PageName name='Products'/>
        </main>
    )
}

export default Products;