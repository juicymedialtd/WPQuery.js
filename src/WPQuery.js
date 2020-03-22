/*
 * WPQuery.js v1.1.1
 * https://github.com/juicymedialtd/WPQuery.js
 *
 * Copyright 2020 Juicy Media
 * Released under the MIT license
 */

import axios from 'axios';

class WPQuery {
    constructor(baseURL) {
        this._baseURL = baseURL;
    }

    request(method, resource = 'posts', params = {}, config = {}) {
        const data = params;
        let string = `/wp-json/wp/v2/${resource}`;

        if (data.id) {
            string += `/${params.id}/`;
        }

        if (method === 'get') {
            const globals = ['fields', 'embed', 'method', 'envelope', 'jsonp'];
            string += '?';

            Object.keys(data).forEach((element) => {
                let param = element
                    .replace(/\.?([A-Z]+)/g, (x, y) => `_${y.toLowerCase()}`)
                    .replace(/^_/, '');

                if (globals.includes(element)) {
                    param = `_${param}`;
                }

                if (Array.isArray(params[element])) {
                    string += `&${param}=${params[element].join()}`;
                } else if (element !== 'id') {
                    string += `&${param}=${params[element]}`;
                }
            });
        }

        return new Promise((resolve, reject) => {
            axios[method](this._baseURL + string, data, config)
                .then((response) => resolve(response))
                .catch((error) => reject(error.response));
        });
    }

    get(resource, params, config) {
        return this.request('get', resource, params, config);
    }

    post(resource, params, config) {
        return this.request('post', resource, params, config);
    }
}

export default WPQuery;
