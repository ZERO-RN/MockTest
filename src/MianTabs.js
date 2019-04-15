/**
 * Created by zerowolf Date: 2019/3/16 Time: 下午8:54
 */
/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform, Image
} from 'react-native';
import {TabNavigator, StackNavigator, TabBarTop, NavigationActions} from 'react-navigation';

import {ZText, ZButton, ZTextInput, ZCutLine} from "zero-wolf-views";
import {zdp, zsp, zWidth, zLayout, zColors, isIphoneX} from "zero-wolf-views/zIndex";
import Home from "./Home";

export default MainTab = TabNavigator({
    Home: {
        screen: Home, navigationOptions: {
            tabBarLabel: '优惠券',
            tabBarIcon: ({tintColor, focused}) => (
                <Image source={{uri: focused ? 'tab_coupon_icon' : 'tab_coupon_nor_icon'}}
                       style={{width: zdp(20), height: zdp(20), backgroundColor: 'transparent'}}/>
            )
        }
    },

}, {
    tabBarPosition: 'bottom',
    lazy: true, // 是否懒加载,
    swipeEnabled: false,
    animationEnabled: false,
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Home',
    tabBarOptions: {
        showIcon: true,
        pressOpacity: 0.8,
        activeTintColor: zColors.main_light, // 文字和图片选中颜色
        inactiveTintColor: zColors.main_default, // 文字和图片默认颜色

        style: {
            height: isIphoneX() ? zdp(75) : zdp(65),
            paddingBottom: isIphoneX() ? zdp(20) : 0,
            backgroundColor: 'white',
        },
        indicatorStyle: {
            opacity: 0
        },
        iconStyle: {
            padding: 0,
            marginTop: zdp(10)
        },
        labelStyle: {
            fontFamily: Platform.OS === 'ios' ? 'PingFang TC' : 'PingFang TC',
            fontSize: zsp(14),
            marginTop: 0,
            padding: 0,
        },
        tabStyle: {
            height: isIphoneX() ? zdp(75) : zdp(65),
            alignItems: 'center',
            justifyContent: 'center',

        }
    }
});

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import {
    Platform, StyleSheet, TextInput,Text, Alert, View, TouchableOpacity, Image,ListView,BackHandler
} from 'react-native';
import {ZText, ZButton, ZTextInput, ZCutLine} from "zero-wolf-views";
import {zdp, zsp, zWidth,zLayout, zColors} from "zero-wolf-views/zIndex";

class MianTabs extends PureComponent {

    constructor(props) {
        super(props);

    }
      componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.goBack();
        return true;
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
               <MyTabView title={''}/>


            </View>)
    }
}
const mapStateToProps = (state) => {
    return {
        nav:state.nav
    }

};

export default withNavigation(connect(mapStateToProps)(MianTabs));


const {width, height} = Dimensions.get('window');
import React, {PureComponent } from 'react';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {
    Platform, StyleSheet, TextInput,Text, Alert, View, TouchableOpacity, Image, Dimensions,ListView
} from 'react-native';
import {ZText, ZButton, ZTextInput, ZCutLine} from "zero-wolf-views";
import {zdp, zsp, zWidth,zLayout, zColors} from "zero-wolf-views/zIndex";

class MianTabs extends PureComponent  {

    constructor(props) {
        super(props);

    }

    static defaultProps = {

    };

    render() {
        return (
            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>

            </View>)
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }

};
MianTabs.propTypes = {

}
export default withNavigation(connect(mapStateToProps)(MianTabs));


import PropTypes from 'prop-types';
import React from "react";
import {Platform, StyleSheet, TextInput,Text, Alert, View, TouchableOpacity, Image} from "react-native";
import {ZText, ZButton, ZTextInput, ZCutLine} from "zero-wolf-views";
import {zdp, zsp, zWidth,zLayout, zColors} from "zero-wolf-views/zIndex";
const Main=(props)=>{
    return(

    )
}

Main.propTypes={
    title:PropTypes.string
}

export {
    Main
}
