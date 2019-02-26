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
import {Types_Home} from "./HomeReduce";

import Mock, {Random} from 'mockjs';
import {fetchUtil} from "../zero/utils/FetchUtil";
// import {fetchHelper} from "./__mocks__";
//
import FetchMock from 'react-native-fetch-mock';
// import {fetchUtil} from "../zero/utils/FetchUtil";
//
const fetch = new FetchMock(require('./__mocks__')).fetch;


class Home extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.getData = this.getData.bind(this);
        this.getDataWithMockjs = this.getDataWithMockjs.bind(this);

    }


    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

        // this.getData();
        // this.getDataWithMockjs();

        // 配置需要mock的路由
        // FetchMock.once('/path/to/api1',Mock.mock('/api/getName', { name: 'Jack', 'age|10-20': 10 }));
        //
        // // 其他路由使用原生fetch，这段代码必须放最后
        // FetchMock.once('*', (url, options) => {
        //     FetchMock.restore();
        //     return fetch(url, options);
        // });

        // let pro = fetchHelper('/api/users/mockjs');
        let formData = new FormData();
        formData.append('start', 0);
        formData.append('count', 5);

        // console.log(formData.get('start'));
        console.log(formData);
        console.log(formData._parts);


        let json = {
            start: 0,
            count: 5
        }

        // let pro = fetchUtil('/top250', 'POST', formData);
        let pro = fetchUtil('POST::/login', 'POST', json);

        pro.then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }


    async getDataWithMockjs() {
        const {data, err} = await fetch('/api/users/mockjs', {xix: 'haha'})
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('fetch failed');
                }
                console.log('1');
                return res.json();
            })
            .then(data => {
                return {data}
            })
            .catch(err => ({err}));


        console.log('3');

        if (err) {
            return false;
        }

        console.log(data);

        this.setState({
            data: data
        });
    }


    getData = () => {

        if (__DEV__) {

            let pro = new Promise(((resolve, reject) => {
                fetch('/test.json')
                    .then(res => {
                        console.log(res);
                        if (res.status !== 200) {
                            throw new Error('fetch failed');
                            // reject('fetch failed')
                        }
                        return res.json();
                    })
                    .then(data => resolve(data))
                    .catch(err => reject(err));
            }));
            // const {data, err} =
            pro.then(res => {
                console.log(res);
                this.setState({
                    data: res,
                });
            }).catch(err => {
                console.log(err);
            })

            /*if (err) {
                return false;
            }
*/

        } else {

            fetchUtil('http://169.254.229.170:8081/test.json', 'GET')
                .then(res => {
                    alert(res)
                    console.log(res);
                })
        }


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
                <MyTabView title={'你好'}/>

                <ZButton title={'jump'} onPress={() => {
                    console.log('jump');
                    this.props.navigation.navigate('Detail');
                }}/>

                <ZButton style={{marginTop: zdp(20)}} title={'reduce'} onPress={() => {
                    console.log('jump');
                    this.props.navigation.dispatch({
                        type: Types_Home.TYPE_Home,
                        homeData: 'haha'
                    })
                }}/>

                <ZButton style={{marginTop: zdp(20)}} title={'saga'} onPress={() => {
                    console.log('jump');
                    this.props.navigation.dispatch({
                        type: Types_Home.TYPE_HOME_ENTER
                    })
                }}/>

                <ZButton style={{marginTop: zdp(20)}} title={'noMock'} onPress={() => {
                    console.log('mock');
                    this.getData()
                }}/>

                <ZButton style={{marginTop: zdp(20)}} title={'mockWith'} onPress={() => {
                    console.log('mockWith');
                    this.getDataWithMockjs()
                }}/>

                <ZButton style={{marginTop: zdp(20)}} title={'fetch'} onPress={() => {
                    console.log('mockWith');
                    fetchUtil('http://169.254.229.170:8081/test.json', 'GET')
                        .then(res => {
                            console.log(res);
                        }).catch(err => {
                        console.log(err);
                    })
                }}/>


                <View style={{marginTop: 100}}>
                    {
                        this.state.data.map((item, index) => {
                            return <Text key={index}>{item.name}</Text>
                        })
                    }
                </View>

            </View>)
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }

};

export default withNavigation(connect(mapStateToProps)(Home));
