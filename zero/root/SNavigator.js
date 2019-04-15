/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    createStackNavigator
} from 'react-navigation';
import Home from "../../src/Home";
import Detail from "../../src/Detail";
import ShouldComponent from "../../src/ShouldComponent";


const SNavigator = createStackNavigator({

    ShouldComponent: ShouldComponent,
    Detail: Detail,
    Home: Home,

    }, {
        headerMode: 'none',
        navigationOptions: ({
                headerTitle: '',
                header: null,
                headerBackTitle: null,
                // gesturesEnabled: false
            }
        )
    }
);


export {
    SNavigator
}
