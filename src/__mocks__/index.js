/**
 * Created by zerowolf Date: 2019/2/25 Time: 下午4:57
 */

import {Mock} from 'react-native-fetch-mock';

const MockFetch = {
    '/api/users/mockjs': ({params}) => {
        console.log(params);
        const all = Mock.mock({
            'list|1-10': [{
                'id|+1': 1,
                'name': '@first @last',
                'age|18-54': 1,
            }]
        }).list;
        let filtered;
        if ('undefined' !== typeof params) {
            filtered = all.filter(item => {
                let result = true;
                const keys = Object.keys(params);
                keys.forEach(key => {
                    const param = params[key];

                    if (item[key] && item[key] !== param) {
                        result = false;
                    }
                });

                return result;
            });
        } else {
            filtered = all;
        }
        return {
            status: 200,
            data: filtered,
        };
    },

    '/test.json': ({params}) => {
        const all = [
            {
                name: 'John',
                age: 15,
            },
            {
                name: 'Lily',
                age: 16,
            }
        ];
        let filtered;
        if ('undefined' !== typeof params) {
            filtered = all.filter(item => {
                let result = true;
                const keys = Object.keys(params);
                keys.forEach(key => {
                    const param = params[key];

                    if (item[key] && item[key] !== param) {
                        result = false;
                    }
                });

                return result;
            });
        } else {
            filtered = all;
        }
        return {
            status: 200,
            data: filtered,
        };
    },

    'POST::/login': (params) => {
        console.log(params);
        console.log(params.params);
        console.log(params.params.start);

        return {
            status: 200,
            data: '登陆成功',
        };
    }

}

export default MockFetch;
