import { connect } from 'react-redux'
import NewOrder from '../../features/Card/NewOrderCard';
import { getAllProducts, fetchProductsFromAPI, getProductsLoadingState } from '../../../redux/productRedux';

const mapStateToProps = (state) => ({
    products: getAllProducts(state),
    loading: getProductsLoadingState(state),
})

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProductsFromAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);