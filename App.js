/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import createSagaMiddleware from 'redux-saga';
import AllReducers from "./zero/root/AllReducers";
import {AppWithNavigationState, middleware} from "./zero/root/AppNavigator";
import rootSaga from "./zero/root/rootSaga";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        AllReducers,
        compose(
            applyMiddleware(sagaMiddleware, middleware)
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
const store = configureStore();


export default class App extends Component<> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
            ;
    }

}
