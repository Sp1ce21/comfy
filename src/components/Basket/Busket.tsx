import s from './Busket.module.css'
import { Props } from './BusketContainer';

const Busket: React.FC<Props> = ({ setIsBasket }) => {
    return (
        <div className={s.busket}>
            hello!
        </div>
    )
}

export default Busket;