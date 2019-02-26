import {createBottomTabNavigator} from "react-navigation";
import {Image, Platform} from "react-native";
import TabFirst from "../../src/Tab_First/TabFirst";
import React from "react";
import {allImages} from "../../resource/allImages";
import {ZTabUtil} from "../utils/ZTabUtil";
import TabSecond from "../../src/Tab_Second/TabSecond";
import TabZERO from "../../src/Tab_Second/TabZERO";
import {InitConfig} from "../../src/global/InitConfig";
import Galleries from "../../src/Tab_Third/Galleries";
import Personal from "../../src/Tab_Fourth/Personal";

/**
 * Created by zerowolf Date: 2018/8/14 Time: 上午1:04
 */
import Icon from 'react-native-vector-icons/Entypo';
import {cusColors} from "../../resource/value/cusColor/cusColors";
import {zdp, zsp} from "zero-wolf-views/zIndex";
import {ZI18n} from "../../resource/languages/I18n";
import {SPReadTest} from "../storage/Storage";
import TestTab from "../../src/Tab_Fourth/TestTab";

const getTitle = (navigation) => {
    switch (navigation.state.routeName) {
        case 'TabFirst':
            return ZI18n.t('tabTitle.recommend');
        case 'TabSecond':
            return ZI18n.t('tabTitle.category');
        case 'Galleries':
            return ZI18n.t('tabTitle.gallery');
        case 'Personal':
            return ZI18n.t('tabTitle.mine');

        default:
            return '测试';
    }
};

const getIconName = (navigation,focused) => {
    switch (navigation.state.routeName) {
        case 'TabFirst':
            return focused?allImages.tabs.tuijian_hig:allImages.tabs.tuijian_nor;
        case 'TabSecond':
            return focused?allImages.tabs.fenlei_hig:allImages.tabs.fenlei_nor;
        case 'Galleries':
            return focused?allImages.tabs.hualang_hig:allImages.tabs.hualang_nor;
        default:
            return focused?allImages.tabs.wode_hig:allImages.tabs.wode_nor;
    }
};
let index;
SPReadTest().then(res => {
    if (res.index === 0) {
        index = 0;
        // alert('asask')
    } else {
        index = 1;
    }
});
console.log(index);


export default createBottomTabNavigator(
    {
        TabFirst: {screen: TabFirst, path: 'app/TabFirst'},
        TabSecond: {screen: TabSecond, path: 'app/TabSecond'},
        Galleries: {screen: Galleries, path: 'app/Galleries'},
        Personal: {screen: Personal, path: 'app/Personal'},
        TestTab: {screen: TestTab, path: 'app/TestTab'},
    }, {
        navigationOptions: ({navigation}) => ({
            title: getTitle(navigation),
            tabBarIcon: ({focused, tintColor}) => {
                return <Image source={getIconName(navigation,focused)}
                              resizeMode={'contain'}
                              style={{
                                  width: zdp(30),
                                  height: zdp(30),
                                  backgroundColor: 'transparent'
                              }}/>

            },
        }),

        tabBarOptions: {
            showIcon: true,
            pressOpacity: 0.8,
            activeTintColor: cusColors.linear_default, // 文字和图片选中颜色
            inactiveTintColor: '#707070', // 文字和图片默认颜色
            style: {
                backgroundColor: 'white',
                height: zdp(60)
            },
            indicatorStyle: {
                opacity: 0
            },
            iconStyle: {
                // padding: 0,
                paddingTop: zdp(10),
                width: zdp(30),
                height: zdp(30),
            },
            labelStyle: {
                fontFamily: Platform.OS === 'ios' ? 'PingFang TC' : 'PingFang TC',
                fontSize: zsp(14),
                // marginTop: zdp(5),
                padding: 0,
            },

            tabStyle: {
                // height: zdp(75),
                alignItems: 'center',
                justifyContent: 'center',

            }
        },

        initialRouteName: InitConfig.initialRouteName,
        tabBarPosition: 'bottom',
        lazy: true, // 是否懒加载,
        swipeEnabled: true,
        animationEnabled: false,
        mode: 'modal',
        headerMode: 'none',
        // backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        // ZTabUtil.tabBarOptions
    });
