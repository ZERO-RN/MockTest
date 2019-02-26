/**
 * Created by zerowolf Date: 2019/2/25 Time: 上午11:15
 */
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
import MyTabView from "../zero/utils/views/MyTabView";

class Detail extends PureComponent {

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
               <MyTabView title={'Detail'}/>


            </View>)
    }
}
const mapStateToProps = (state) => {
    return {
        nav:state.nav
    }

};

export default withNavigation(connect(mapStateToProps)(Detail));
