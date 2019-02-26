import {toastShort} from "./ToastUtil";
import Constants from "../../src/global/Constants";

/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @param isErrToast           是否错误弹出吐司
 * @return {Promise<any> | Promise}
 */
export const fetchUtil = async (url, method, params, isErrToast = true) => {

    let loginInfo= await global.storage.load({
        key:'loginInfo'
    })

    console.log('request url:', url, method, params);  //打印请求参数
    if (!params) {   //如果网络请求中没有参数
        return new Promise(function (resolve, reject) {
            fetch(Constants.common_url + url, {
                method: method,
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);  //网络请求成功返回的数据
                    if (responseData.ret === 0) {
                        resolve(responseData);
                    } else {
                        isErrToast && toastShort(responseData.errmsg);
                        reject({type: 1, err: responseData})
                    }

                })
                .catch((err) => {
                    isErrToast && toastShort(err);
                    console.log(err);
                    reject(err);
                });

        });
    } else {   //如果网络请求中带有参数
        return new Promise(function (resolve, reject) {
            fetch(Constants.common_url + url, {
                method: method,
                // body: params,
                body: JSON.stringify(params)//body参数，通常需要转换成字符串后服务器才能解析
            }).then((response) => response.json())
                .then((responseData) => {

                    console.log(responseData);   //网络请求成功返回的数据

                    if (responseData.ret === 0) {
                        resolve(responseData);
                    } else {
                        isErrToast && toastShort(responseData.errmsg);
                        reject({type: 1, err: responseData})
                    }

                })
                .catch((err) => {
                    isErrToast && toastShort(err);
                    console.log(err);   //网络请求失败返回的数据
                    reject({type: 0, err: err})
                });
        });
    }
};
