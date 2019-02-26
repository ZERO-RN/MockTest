import {toastShort} from "./ToastUtil";
import FetchMock from "react-native-fetch-mock";
import MockFetch from "../../src/__mocks__";

/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @param isErrToast           是否错误弹出吐司
 * @return {Promise<any> | Promise}
 */
// const CommonUrl = 'http://192.168.1.101:8081';
const CommonUrl = 'https://api.douban.com/v2/movie';


export const fetchUtil = (url, method = 'GET', params, isErrToast = true) => {


        let hasMock = MockFetch[url];
        // console.log(hasMock);
        if (hasMock) {
            const fetch = new FetchMock(MockFetch).fetch;

            let header = {
                "Content-Type": "multipart/form-data;charset=UTF-8",
            //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
                // "token":'c6a4b1d0e4a44e11c0e63f4348b29146'  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
            };

            return new Promise(((resolve, reject) => {
                const options = {
                    headers: header,
                    method: 'GET',
                    body: params,
                    // url: "/login",
                    // urlparams: {}
                };

                // const options = {};
                fetch(url,options)
                    .then(res => {
                        if (res.status !== 200) {
                            throw new Error('fetch failed');
                        }
                        console.log('1');
                        return res.json();
                    })
                    .then(data => {
                        console.log('2');
                        resolve(data);
                    })
                    .catch(err => {
                        reject(err)
                    });
            }));
        } else {
            console.log('request url:', url, method, params);  //打印请求参数
            if (!params) {   //如果网络请求中没有参数
                return new Promise(function (resolve, reject) {
                    fetch(CommonUrl + url, {
                        method: method,
                    })
                        .then((response) => response.json())
                        .then((responseData) => {
                            // console.log(responseData);  //网络请求成功返回的数据
                            resolve(responseData);
                        })
                        .catch((err) => {
                            isErrToast && toastShort(err);
                            console.log(err);
                            reject(err);
                        });

                });
            } else {   //如果网络请求中带有参数
                return new Promise(function (resolve, reject) {
                    fetch(CommonUrl + url, {
                        method: method,
                        // body: params,
                        // body: JSON.stringify(params)//body参数，通常需要转换成字符串后服务器才能解析
                        body: params//body参数，通常需要转换成字符串后服务器才能解析
                    }).then((response) => response.json())
                        .then((responseData) => {

                            // console.log(responseData);   //网络请求成功返回的数据

                            resolve(responseData);
                        })
                        .catch((err) => {
                            isErrToast && toastShort(err);
                            console.log(err);   //网络请求失败返回的数据
                            reject({type: 0, err: err})
                        });
                });
            }
        }
    }
;


