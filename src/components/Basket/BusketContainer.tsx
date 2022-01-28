import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import { productsObject, setIsBasket, setAddedProductsFromLocalStorage, clearAddedProducts, setTotalPrice, clearTotalPrice } from '../../redux/products-reducer'
import { useLayoutEffect } from "react"

type Props = {
    addedProducts: Array<productsObject>
    totalPrice: number

    setIsBasket: (isBasket: boolean) => void
    setAddedProductsFromLocalStorage: (addedProducts: any) => void
    clearAddedProducts: ()=>void
    setTotalPrice: (totalPrice: number)=>void
    clearTotalPrice: ()=> void
}

const BusketContainer: React.FC<Props> = ({ setIsBasket, addedProducts, totalPrice, setAddedProductsFromLocalStorage, clearAddedProducts, setTotalPrice, clearTotalPrice }) => {

    let productsFromLocalStorage: any = localStorage.getItem('addedProducts');
    let ownAddedProducts: any = JSON.parse(productsFromLocalStorage)
    if (addedProducts.length !== 0) {
        localStorage['addedProducts'] = JSON.stringify(addedProducts);
    }
    else {
        if (ownAddedProducts) {
            setAddedProductsFromLocalStorage(ownAddedProducts)
        }
    }


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

export default connect(mapStateToProps, { setIsBasket, setAddedProductsFromLocalStorage, clearAddedProducts, setTotalPrice, clearTotalPrice })(BusketContainer);
