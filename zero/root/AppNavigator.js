import React from 'react';
import { connect } from 'react-redux';
import { SNavigator } from './SNavigator';

import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const AppNavigator = reduxifyNavigator(SNavigator, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);


export {
    middleware,
    AppWithNavigationState
}
