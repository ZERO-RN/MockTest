/**
 * Created by zerowolf Date: 2019/2/25 Time: 上午11:17
 */
export const Types_Home = {
    TYPE_HOME_ENTER: 'TYPE_HOME_ENTER',
    TYPE_Home: 'TYPE_Home',

}

export const home = (state = {}, action) => {
    switch (action.type) {

        case Types_Home.TYPE_Home:
            console.log(action.homeData);
            return Object.assign(
                {},
                state,
                {homeData: action.homeData});

        default:
            return state;
    }
}

export const actions_Home = {
    putData: (data) => ({type: Types_Home.TYPE_Home, data}),
    putHomeData: (data) => ({type: Types_Home.TYPE_HOME_ENTER, data}),
}
