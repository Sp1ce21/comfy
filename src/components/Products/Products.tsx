import PageName from '../../common/PageName/PageName';
import s from './Products.module.css'

type Props = {
    products: any
}

const Products: React.FC<Props> = ({ products }) => {
    // debugger
    // let data = products.data

    // console.log(data.category)

    return (
        <main className={s.main}>
            <PageName name='Products' />
            {/* {products.data} */}

            {/* {data.category} */}
        </main>
    )
}

export default Products;