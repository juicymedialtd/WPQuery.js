/*
 * WPQuery.js v1.0.0
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

    request(method, resource, params) {
        let string = `/wp-json/wp/v2/${resource}`;

        if (params.id) {
            string += `/${params.id}/`;
        }

        string += '?';

        Object.keys(params).forEach((element) => {
            const param = element.replace(/\.?([A-Z]+)/g, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, '');

            if (Array.isArray(params[element])) {
                string += `&_${param}=${params[element].join()}`;
            } else if (typeof params[element] === 'number') {
                if (element !== 'id') {
                    string += `&${param}=${params[element]}`;
                }
            } else if (typeof params[element] === 'boolean') {
                string += `&${param}=${params[element]}`;
            } else if (typeof params[element] === 'string') {
                string += `&${param}=${params[element]}`;
            }
        });

        return new Promise((resolve, reject) => {
            axios[method](this._baseURL + string)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response.data));
        });
    }

    get(resource, params) {
        this.request('get', resource, params);
    }
}

export default WPQuery;
