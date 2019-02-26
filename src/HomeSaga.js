/**
 * Created by zerowolf Date: 2019/2/25 Time: 上午11:21
 */

 import {take,call,fork,put,race,ForkEffect} from "redux-saga/effects";
import {Types_Home} from "./HomeReduce";
import {toastShort} from "../zero/utils/ToastUtil";

 export function* dealWithHome(url){
     try{
         console.log('saga');


     }catch (error) {
         toastShort('处理数据错误'+error)
     }
 }

 export function* watchHome() {
     while (true) {
         const {
             url
         } = yield take(Types_Home.TYPE_HOME_ENTER);

         yield fork(dealWithHome, url);
     }
 }
