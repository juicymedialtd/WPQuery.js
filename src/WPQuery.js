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

    request(method, data) {
        let string = `/wp-json/wp/v2/${data.postType}?`;

        if (data.fields) {
            string += `_fields=${data.fields.join()}`;
        }

        return new Promise((resolve, reject) => {
            axios[method](this._baseURL + string)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response.data));
        });
    }
}

export default WPQuery;
