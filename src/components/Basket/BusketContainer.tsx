import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import { productsObject, setIsBasket, clearAddedProducts, setTotalPrice, clearTotalPrice, changeAddedProducts } from '../../redux/products-reducer'
import { useLayoutEffect } from "react"

type Props = {
    addedProducts: Array<productsObject>
    totalPrice: number

    setIsBasket: (isBasket: boolean) => void
    clearAddedProducts: () => void
    setTotalPrice: (totalPrice: number) => void
    clearTotalPrice: () => void
    changeAddedProducts: (addedProducts: any) => void
}

const BusketContainer: React.FC<Props> = ({ addedProducts, totalPrice, setIsBasket, clearAddedProducts, setTotalPrice, clearTotalPrice, changeAddedProducts }) => {

    useLayoutEffect(() => {
        return () => clearTotalPrice()
    }, [])

    const changeAddedProductsCallback = (id: number) => {
        let newAddedProducts: any;
        let number: any
        newAddedProducts = [...addedProducts]
        for (let product of addedProducts) {
            if (product.id === id) {
                if (newAddedProducts.length === 1) {
                    localStorage.clear()
                    clearAddedProducts()
                }
                else {
                    addedProducts.findIndex((element, index) => {
                        if (element.id === id) {
                            number = index
                        }
                    })
                    newAddedProducts.splice(number, 1)
                }
            }
        }
        changeAddedProducts(newAddedProducts)
    }

    return (
        <Busket totalPrice={totalPrice} addedProducts={addedProducts} clearAddedProducts={clearAddedProducts} setTotalPrice={setTotalPrice} changeAddedProductsCallback={changeAddedProductsCallback} clearTotalPrice={clearTotalPrice} setIsBasket={setIsBasket} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
    totalPrice: state.productsPage.totalPrice
});

export default connect(mapStateToProps, { setIsBasket, clearAddedProducts, setTotalPrice, clearTotalPrice, changeAddedProducts })(BusketContainer);
