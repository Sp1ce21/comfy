import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import { productsObject, setIsBasket, clearAddedProducts, setTotalPrice, clearTotalPrice } from '../../redux/products-reducer'
import { useLayoutEffect } from "react"

type Props = {
    addedProducts: Array<productsObject>
    totalPrice: number

    setIsBasket: (isBasket: boolean) => void

    clearAddedProducts: ()=>void
    setTotalPrice: (totalPrice: number)=>void
    clearTotalPrice: ()=> void
}

const BusketContainer: React.FC<Props> = ({ setIsBasket, addedProducts, totalPrice, clearAddedProducts, setTotalPrice, clearTotalPrice }) => {

    


    useLayoutEffect(() => {
        return () => {
            clearTotalPrice()
        }
    }, [])


    return (
        <Busket setIsBasket={setIsBasket} addedProducts={addedProducts} clearAddedProducts={clearAddedProducts} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
    totalPrice: state.productsPage.totalPrice
});

export default connect(mapStateToProps, { setIsBasket, clearAddedProducts, setTotalPrice, clearTotalPrice })(BusketContainer);
