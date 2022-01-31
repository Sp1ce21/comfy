import PageName from '../../common/PageName/PageName';
import { productsObject } from '../../redux/products-reducer';
import s from './ItemPage.module.css'

type Props = {
    currentItem: productsObject
}

const ItemPage: React.FC<Props> = ({ currentItem }) => {
    debugger
    return (
        <main>
            <PageName name='Item' />
            <div className={s.mainBlock}>
                    <img src={currentItem.image} alt="Product image" />
                    <div className={s.column}>
                        <h1>{currentItem.title}</h1>
                        <div className={s.description}>{currentItem.description}</div>
                        <div className={s.item}><span>Category:</span> {currentItem.category}</div>
                        <div className={s.item}><span>Price:</span> ${currentItem.price}</div>
                        {/* <div className={s.item}><span>Rating:</span> {currentItem.rating.rate}</div> */}
                        {/* <div className={s.item}><span>Count:</span> {currentItem.rating.count}</div> */}
                    </div>
            </div>
        </main>
    )
}

export default ItemPage;