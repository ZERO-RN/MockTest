import Constants from "../../src/global/Constants";
import {toastShort} from "./ToastUtil";


// let token = '';
// ?start=0&count=10
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param token
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

export const fetchUtilToken = (url, method, token, params) => {

    console.log('token:'+token);
    console.log(params);
    // if (!params) {   //如果网络请求中没有参数

    console.log('url: ', Constants.common_url + url,'method:',method, 'token:',token, params);
    return new Promise(function (resolve, reject) {
        let header = {
            "Content-Type": "multipart/form-data;charset=UTF-8",
            "token": token + ''  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
            // "token":'c6a4b1d0e4a44e11c0e63f4348b29146'  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
        };
        if (!params) {
            fetch(Constants.common_url + url, {
                method: method,
                headers: header,
            }).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:', url, responseData + '++++');  //网络请求成功返回的数据
                    console.log(responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('err:', url, err);     //网络请求失败返回的数据
                    reject(err);
                    toastShort(err)
                });

        } else {
            fetch(Constants.common_url + url, {
                method: method,
                headers: header,
                body: params //body参数，通常需要转换成字符串后服务器才能解析

            }).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:', url, responseData);   //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('err:', url, err);   //网络请求失败返回的数据
                    reject('带参请求'+ err);
                    toastShort('带参请求'+ err)
                });
        }
    })
};
