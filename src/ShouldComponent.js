/**
 * Created by zerowolf Date: 2019/2/25 Time: 上午11:15
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import {
    Platform,
    StyleSheet,
    TextInput,
    Text,
    Alert,
    View,
    TouchableOpacity,
    Image,
    ListView,
    BackHandler
} from 'react-native';
import {ZText, ZButton, ZTextInput, ZCutLine} from "zero-wolf-views";
import {zdp, zsp, zWidth, zLayout, zColors} from "zero-wolf-views/zIndex";
import MyTabView from "../zero/utils/views/MyTabView";

class ShouldComponent extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            color: 'blue',
            words: ['xixi','haha']
        }

        var x = [1, 2];
        var y = x;
        x.push(3);
        // console.log(x==y)//输出true
        // alert(x);
        // alert(y)
    }


/*
    shouldComponentUpdate(nextProps, nextState) {

        console.log(nextState);
        console.log(this.state);
        if (nextState.color !== this.state.color) {

            return true;
        }

        return true;

    }
*/

    static defaultProps = {
        name: 'ZEROwolf'
    };


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView title={'ShouldComponent'}/>

                <ZText parentStyle={{}}
                       content={this.props.name}
                       fontSize={zsp(24)}
                       color={this.state.color}/>

                <ZButton title={'切换颜色'} onPress={(() => (
                    this.setState(state => ({
                        color: state.color === 'blue' ? 'red' : 'blue'
                    }))
                ))}/>
                <ZButton title={'失效状态比较'} onPress={() => {
                    const words1 = this.state.words;
                    words1.push('askjhdhjasd');
                    this.setState({
                        words: words1
                    })

                    /*this.setState(prevState => ({
                        words: prevState.words.concat(['smdiwiksd'])
                    }));*/

                   /* this.setState(prevState => ({
                        words: prevState.words.push('smdiwiksd')
                    }));*/


                }}/>


                 <ZText parentStyle={{marginTop: zdp(20)}}
                         content={this.state.words.toString()}
                         fontSize={zsp(33)}
                         color={zColors.purple}/>


                <Children color={this.state.color}/>

            </View>);
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }

};


export default withNavigation(connect(mapStateToProps)(ShouldComponent));


class Children extends PureComponent {

    constructor(props) {
        super(props);

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.color !== this.props.color) {
            return true;
        }
        return false;
    }

    static defaultProps = {};

    render() {
        return (
            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                <ZText parentStyle={{}}
                       content={this.props.color}
                       fontSize={zsp(77)}
                       color={zColors.black}/>
            </View>)
    }
}

