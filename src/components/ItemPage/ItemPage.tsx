import PageName from '../../common/PageName/PageName';
import Preloader from '../../common/Preloader/Preloader';
import { productsObject } from '../../redux/products-reducer';
import s from './ItemPage.module.css'

type Props = {
    currentItem: productsObject
    isFetching: boolean
}

const ItemPage: React.FC<Props> = ({ currentItem, isFetching }) => {
    return (
        <main>
            <PageName name='Item' />
            {isFetching
                ? <Preloader />
                : <div className={s.mainBlock}>
                    <img src={currentItem.image} alt="Product image" />
                    <div className={s.column}>
                        <h1>{currentItem.title}</h1>
                        <div className={s.description}>{currentItem.description}</div>
                        <div className={s.item}><span>Category:</span> {currentItem.category}</div>
                        <div className={s.item}><span>Price:</span> ${currentItem.price}</div>
                    </div>
                </div>}
        </main>
    )
}

export default ItemPage;