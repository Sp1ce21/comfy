import { useState } from 'react';
import s from './Filter.module.css'

const Filter: React.FC = () => {

    const [range, setRange] = useState(40)

    return (
        <div className={s.column}>
            <input type="text" className={s.input} placeholder='Search...'/>
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
                <input type="range" id="price" name="price"
         min="1" max="80"  step='1' onChange={(e)=>setRange(+e.target.value)}/>
                <div className={s.value}>Value: ${range}</div>
            </div>
        </div>
    )
}

export default Filter;