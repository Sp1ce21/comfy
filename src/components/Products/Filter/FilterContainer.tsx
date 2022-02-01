import { connect } from "react-redux"
import { appStateType } from '../../../redux/store'
import { setPrice, setSearch, setCurrentCategory } from '../../../redux/products-reducer'
import Filter from "./Filter"

export type Props = {
    price: number
    search: string
    minPrice: number
    maxPrice: number
    categories: Array<string>
    currentCategory: string

    setSearch: (search: string) => void
    setPrice: (price: number) => void
    setCurrentCategory: (currentCategory: string) => void
}

const ProductsContainer: React.FC<Props> = ({ setPrice, price, setSearch, setCurrentCategory, search, maxPrice, minPrice, categories, currentCategory}) => {
    return (
        <Filter setPrice={setPrice} price={price} setSearch={setSearch} search={search} maxPrice={maxPrice} minPrice={minPrice} categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    price: state.productsPage.price,
    search: state.productsPage.search,
    minPrice: state.productsPage.minPrice,
    maxPrice: state.productsPage.maxPrice,
    categories: state.productsPage.categories,
    currentCategory: state.productsPage.currentCategory,
});

export default connect(mapStateToProps, { setPrice, setSearch, setCurrentCategory })(ProductsContainer);
