import s from './Filter.module.css'
import {Props} from './FilterContainer'

const Filter: React.FC<Props> = ({setPrice, setSearch, price, search, minPrice, maxPrice}) => {
    
    console.log(price)

    return (
        <div className={s.column}>
            <input type="text" className={s.input} placeholder='Search...' onChange={(e)=>setSearch(e.target.value)} value={search}/>
            <div className={s.companies}>
                <div className={s.title}>Companies</div>
                <ul className={s.list}>
                    <li>All</li>
                    <li>Ikea</li>
                    <li>Marcos</li>
                    <li>Caressa</li>
                    <li>Liddy</li>
                </ul>
            </div>
            <div className={s.price}>
                <div className={s.title}>Price</div>
                <input type="range" id="price" className={s.range} name="price"
         min={minPrice} max={maxPrice}  step='1' onChange={(e)=>setPrice(+e.target.value)} value={price}/>
                <div className={s.value}>Value: ${price}</div>
            </div>
        </div>
    )
}

export default Filter;