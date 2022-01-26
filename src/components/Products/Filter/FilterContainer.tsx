import { connect } from "react-redux"
import { appStateType } from '../../../redux/store'
import { setPrice, setSearch } from '../../../redux/products-reducer'
import Filter from "./Filter"

export type Props = {
    price: number
    search: string
    minPrice: number
    maxPrice: number

    setSearch: (search: string) => void
    setPrice: (price: number) => void
}

const ProductsContainer: React.FC<Props> = ({ setPrice, price, setSearch, search, maxPrice, minPrice}) => {



    return (
        <Filter setPrice={setPrice} price={price} setSearch={setSearch} search={search} maxPrice={maxPrice} minPrice={minPrice}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    price: state.productsPage.price,
    search: state.productsPage.search,
    minPrice: state.productsPage.minPrice,
    maxPrice: state.productsPage.maxPrice,
});

export default connect(mapStateToProps, { setPrice, setSearch })(ProductsContainer);
