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
        let string = `/wp-json/wp/v2/${options.postType}?`;

        if (options.fields) {
            string += `_fields=${options.fields.join()}`;
        }

        if (options.envelope) {
            string += '&_envelope';
        }

        if (options.page) {
            string += `&page=${options.page}`;
        }

        if (options.perPage) {
            string += `&per_page=${options.perPage}`;
        }

        if (options.offset) {
            string += `&offset=${options.offset}`;
        }

        if (options.order) {
            string += `&order=${options.order}`;
        }

        return new Promise((resolve, reject) => {
            axios[method](this._baseURL + string)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response.data));
        });
    }
}

export default WPQuery;
