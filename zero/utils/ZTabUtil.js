import {Platform} from "react-native";
import {cusColors} from "../../resource/value/cusColor/cusColors";

/**
 * Created by zerowolf Date: 2018/7/4 Time: 上午12:40
 */
const ZTabUtil = {
    tabBarOptions: {
        backgroundColor: '#008d93',
        activeTintColor: cusColors.linear_default,
        inactiveTintColor: '#666666',
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'yellow',
        labelStyle: {
            fontFamily: Platform.OS === 'ios' ? 'PingFang TC' : 'PingFang TC',
            fontSize: 16,
            paddingVertical: 0,
            // marginTop: Platform.OS === 'android' ? zdp(5) : zdp(5),
        },
        style: {
            backgroundColor: '#008d93',
            elevation: 0
        },

        // iconStyle: {
        //     marginTop: zdp(10)
        // },
        tabStyle: {
            backgroundColor: '#008d93',
            height: 50
        },
        indicatorStyle: {
            // height: zdp(10) , // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            backgroundColor: cusColors.linear_default
        }
    }
};

export {
    ZTabUtil
};
