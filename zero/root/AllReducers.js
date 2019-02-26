/**
 * Created by zerowolf on 2017/12/6.
 */

import {combineReducers} from 'redux';
import {nav} from "./Navigators";
import {home} from "../../src/HomeReduce";



// const navReducer = createNavigationReducer(sna);

export default  AllReducers = combineReducers({
    nav: nav,
    home: home,


});

