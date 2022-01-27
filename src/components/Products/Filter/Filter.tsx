import s from './Filter.module.css'
import { Props } from './FilterContainer'

const Filter: React.FC<Props> = ({ setPrice, setSearch, price, search, minPrice, maxPrice, categories, currentCategory, setCurrentCategory }) => {
    return (
        <div className={s.column}>
            <input type="text" className={s.input} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} value={search} />
            <div className={s.companies}>
                <div className={s.title}>Categories</div>
                <ul className={s.list}>
                    {categories.map((elem, index) => {
                        return <li key={index} className={currentCategory === elem ? s.active : s.unactive} onClick={() => setCurrentCategory(elem)}>{elem}</li>
                    })}
                </ul>
            </div>
            <div className={s.price}>
                <div className={s.title}>Price</div>
                <input type="range" id="price" className={s.range} name="price"
                    min={minPrice} max={maxPrice} step='1' onChange={(e) => setPrice(+e.target.value)} value={price} />
                <div className={s.value}>Value: ${price}</div>
            </div>
        </div>
    )
}

export default Filter;