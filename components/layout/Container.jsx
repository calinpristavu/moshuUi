import React from "react";
import Sidebar from "./Sidebar";
import Products from "../../pages/Products";
import Home from '../../pages/Home';
import {Route} from "react-router-dom";

class Container extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg">
                        <Route exact path="/" component={Home}/>
                        <Route path="/:categoryName" component={Products}/>
                    </div>
                    <div className="col-lg col-lg-3">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;