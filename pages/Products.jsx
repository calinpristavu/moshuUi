import React from "react";
import PropTypes from 'prop-types';
import Product from "../components/Product";
import {connect} from "react-redux";
import {findProductsForCategoryName} from "../store/selectors/productSelector";
import {getProducts} from "../actionCreators/products";
import {getCategories} from "../actionCreators/categories";
import {bindActionCreators} from "redux";

class Products extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    static renderProduct(product, index) {
        return (
            <div
                key={index}
                className="col-2">
                <Product
                    product={product}/>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                {this.props.products.map(Products.renderProduct)}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: findProductsForCategoryName(state, props.match.params.categoryName)
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            getCategories: getCategories,
            getProducts: getProducts,
        },
        dispatch
    );
};

Products.propTypes = {
    match: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);