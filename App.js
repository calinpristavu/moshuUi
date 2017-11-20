import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Container from './components/layout/Container';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import store from "./store/store";
import {Provider} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Container/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);