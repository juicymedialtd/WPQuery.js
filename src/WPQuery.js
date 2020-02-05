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

    request(method, options) {
        let resource;

        if (!options.resource) {
            resource = 'posts';
        } else {
            resource = options.resource;
        }

        let string = `/wp-json/wp/v2/${resource}?`;

        Object.keys(options).forEach((element) => {
            let param;

            if (element !== 'orderBy') {
                param = element.replace(/\.?([A-Z]+)/g, (x, y) => `_${y.toLowerCase()}`).replace(/^_/, '');
            } else {
                param = element.toLowerCase();
            }

            if (Array.isArray(options[element])) {
                string += `&_${param}=${options[element].join()}`;
            } else if (typeof options[element] === 'number') {
                string += `&${param}=${options[element]}`;
            } else if (typeof options[element] === 'boolean') {
                string += `&_${param}`;
            } else if (typeof options[element] === 'string') {
                string += `&${param}=${options[element]}`;
            }
        });

        return new Promise((resolve, reject) => {
            axios[method](this._baseURL + string)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response.data));
        });
    }
}

export default WPQuery;
