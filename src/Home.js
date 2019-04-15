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
// import {ZText, ZButton, ZTextInput, ZCutLine} from "zero-wolf-views";
// import {zdp, zsp, zWidth, zLayout, zColors} from "zero-wolf-views/zIndex";
// import MyTabView from "../zero/utils/views/MyTabView";
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


        // var x; // 声明 x
        // console.log(x);

        // console.log(typeof y); //output: undefined

        // console.log(z); // 抛出异常: ReferenceError: z is not defined


        //eval

        /*

                console.log(typeof function f() {
                });
                console.log(typeof eval(function f() {
                }));

                var y = 1;
                if (function f() {
                }) {
                    console.log(typeof f);
                    y += typeof f;
                }
                console.log(y);

                console.log(eval(function z(a, b) {
                    a * b;
                }));

                var x = 10;

                // console.log((eval(x + 17)));

                function testfunction() {
                    return 6;
                }
        */

        /*  if(testfunction)
          {
              alert("true  testfunction;");
          }
          else
          {
              alert("false  testfunction;");
          }
  */
        /*  if(testfunction())
          {
              alert("true  testfunction;");
          }
          else
          {
              alert("false  testfunction;");
          }*/

        /*

                var k = 1;

                // console.log(typeof function foo(){})
                // console.log(typeof eval(function foo(){}))
                // console.log(typeof foo);;


                if (1) {
                 let a =  eval(function foo(){});
                    // function foo() {
                    //     return 8;}
                    //
                    console.log(a);
                    console.log(typeof foo);
                    k += typeof a;
                }
                console.log(k);
        */


        //闭包
        /*

                var globalVar = "abc";

                function outerFunction(outerArg) {
                    var outerFuncVar = 'x';

                    function innerFunction(innerArg) {
                        var innerFuncVar = "y";
                        console.log(
                            "outerArg = " + outerArg + "\n" +
                            "outerFuncVar = " + outerFuncVar + "\n" +
                            "innerArg = " + innerArg + "\n" +
                            "innerFuncVar = " + innerFuncVar + "\n" +
                            "globalVar = " + globalVar);

                    }

                    return innerFunction;
                }


                outerFunction(18)(12);



                function init() {
                    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
                    function displayName() { // displayName() 是内部函数,一个闭包
                        // alert(name); // 使用了父函数中声明的变量
                    }
                    displayName();
                }
                init();


                function makeFunc(aaa) {
                    var name = "Mozilla";
                    function displayName(bbb) {
                        // alert(name);
                        // alert(aaa);
                        // alert(''+aaa + bbb);
                    }
                    return displayName;
                }

                var myFunc = makeFunc(222);
                myFunc(333);
                // makeFunc(1111)(222);


        //mul函数
        console.log(mul(2)(3)(4)); // output : 24
        console.log(mul(4)(3)(4)); // output : 48

        function mul (x) {
            return function (y) { // anonymous function
                return function (z) { // anonymous function
                    return x * y * z;
                };
            };
        }


         */


        //数组对象的判断
        /*
        let array = [1, 2, 3, 4];
        let obj= {name:'aaa', age: 18}

        // function isArray(obj){
        //     return obj.__proto__ === Array.prototype;
        // }
        //


        console.log(array.__proto__);
        console.log(Array.prototype);
        console.log(Object.prototype);

        console.log(obj.__proto__);

        console.log(Object.prototype.toString.call(array));
        console.log(Object.prototype.toString.call(obj));

        // console.log(Object.prototype.toString);

        function isArray(obj){
            return Object.prototype.toString.call( obj ) === '[object Array]';
        }
        console.log(isArray(array));
        console.log(isArray(obj));

*/


        //闭包以及delete(报错,不可用)
        /*
                var output = (function(x){
                    // delete x;
                    return x;
                })(0);

                function f() {
                    function f1(x) {
                        return x
                    }

                    return f1;
                }

                console.log(function (x) {
                    // delete x;
                    return x;
                }(16));

                // let aaaa = f()

                console.log(f()(10));


                console.log(output);



                var x = 1;
                var output1 = (function(x){
                    // delete x;
                    return y;
                })(100);


                console.log(output1);*/


        /* var x = { foo : 1};
         var output = function(){
             // delete x.foo;
             return x.foo;
         };

         console.log(output());
         */

        /*

                var Employee = {
                    company: 'xyz'
                }
                var emp1 = Object.create(Employee);
                console.log(emp1);
                console.log(Employee.company);

                delete emp1.company
                console.log(emp1.company);

                //输出是 xyz，这里的 emp1 通过 prototype 继承了 Employee的 company。
                // emp1自己并没有company属性。所以delete操作符的作用是无效的。
        */


        /*

                var trees = ["redwood","bay","cedar","oak","maple"];
                delete trees[3];
                 trees[3] = 'haha';
                console.log(trees);
        */

        //基本类型的运算

        /*   var bar = true;
           console.log(bar + 0);
           console.log(bar + "xyz");
           console.log(bar + true);
           console.log(bar + false);
           */
        //Number + Number -> 加法
        //
        // Boolean + Number -> 加法
        //
        // Boolean + Boolean -> 加法
        //
        // Number + String -> 连接
        //
        // String + Boolean -> 连接
        //
        // String + String -> 连接

        /*

                var z = 1;
                console.log(typeof y);
                var y = x = typeof y;
                console.log(z);
                console.log(y);
        */

        //输出是 undefined。js中赋值操作结合律是右至左的 ，即从最右边开始计算值赋值给左边的变量。


       /* var foo1 = function bar(){
            // foo is visible here
            // bar is visible here
            console.log(typeof bar); // Work here :)
            console.log(typeof foo1); // Work here :)
        };

        foo1();
*/


       //JavaScript 只有声明的变量会提升，初始化的不会。

     /*   var a;
        console.log(a);

        a = 12;

        console.log(foo)
        console.log(bar)


        var foo = function(){
            // Some code
            console.log('aaa');
        };

        function bar(){
            // Some code
            console.log('bbb');
        };
*/

     //instanceof操作符用来判断是否当前对象是特定类的对象。
/*
        function foo(){
            return foo;
        }


        console.log(new foo());
        console.log(foo);

        console.log(new foo() instanceof foo);


        function Animal(){
            //或者不写return语句
            return this;
        }
        var dog = new Animal();
        console.log(dog);

        console.log(dog instanceof Animal); // Output : true

        */

        // 如果我们使用JavaScript的"关联数组"，我们怎么计算"关联数组"的长度？
       /* var counterArray = {
            A : 3,
            B : 4
        };
        counterArray["C"] = 1;

        console.log(Object.keys(counterArray).length);
        console.log(Object.keys(counterArray)[0]);*/


        //JS面试题
        // https://segmentfault.com/a/1190000008785931
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
        /*    let formData = new FormData();
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
    */
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
