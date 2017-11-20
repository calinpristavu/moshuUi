import React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getCategories} from "../../actionCreators/categories";
import {bindActionCreators} from "redux";
import {getCategoriesList} from "../../store/selectors/categorySelector";
import 'bootstrap/scss/bootstrap.scss';

class Header extends React.Component {
    componentDidMount() {
        this.props.getCategories();
    }

    static renderCategory(category, index) {
        return (
            <div
                className="text-center"
                key={index}>
                <Link
                    to={`/${category.name}`}>
                    <div>
                        <img
                            className="rounded-circle"
                            src={category.image}
                            alt={category.name}/>
                    </div>
                    {category.name}
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex flex-row">
                    <div>

                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    {this.props.categories.map(Header.renderCategory)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: getCategoriesList(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            getCategories: getCategories
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);