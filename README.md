## WPQuery.js

An [axios](https://github.com/axios/axios) wrapper for the WordPress REST API.

### Status

[![npm version](https://img.shields.io/npm/v/wpqueryjs.svg)](https://npmjs.com/package/wpqueryjs)
[![JS gzip size](https://img.badgesize.io/juicymedialtd/WPQuery.js/master/dist/WPQuery.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/juicymedialtd/WPQuery.js/tree/master/dist/WPQuery.min.js)
[![downloads](https://img.shields.io/npm/dm/wpqueryjs.svg)](https://npmjs.com/package/wpqueryjs)
[![Dependencies Status](https://david-dm.org/juicymedialtd/WPQuery.js/status.svg)](https://david-dm.org/juicymedialtd/WPQuery.js)
[![devDependency Status](https://david-dm.org/juicymedialtd/WPQuery.js/dev-status.svg)](https://david-dm.org/juicymedialtd/WPQuery.js?type=dev)

### Getting Started

* [Download the latest release.](https://github.com/juicymedialtd/WPQuery.js/releases/download/v1.0.2/WPQuery-1.0.2.zip)
* Clone the repo: `git clone https://github.com/juicymedialtd/WPQuery.js.git`
* Install with [npm](https://www.npmjs.com/): `npm install wpqueryjs`

### Methods

#### `request`

A method that returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) with the data that you have queried for. All you have to do is pass the HTTP request you want to perform, along with a [resource](https://developer.wordpress.org/rest-api/reference/) e.g. Tags, Posts or a Custom Post Type and the parameters you wish to include in your query.

If you want to include any [global parameters](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/) in your request, you don't need to include the `_` character as this will be done for you. Also, when requesting a single listing of a resource you can do this by adding a `id` property to the `params` object like the examples below.

Any camel case properties e.g. `perPage` passed in the `params` object will change to lowercase and an `_` will be added where appropriate. e.g. `perPage` will change to `per_page` in your query.

Retrieves a page.
```
const query = new WPQuery('https://demo.wp-api.org')
    .request('get', 'pages', {
        id: 2,
    });
```

Retrieves the latest 3 posts published in multiple tags.
```
const query = new WPQuery('https://demo.wp-api.org')
    .request('get', 'posts', {
        perPage: 3,
        tags: [6, 4],
    });
```

Retrieves 2 users in descending order by their IDs.

```
const query = new WPQuery('https://demo.wp-api.org')
    .request('get', 'users', {
        order: 'desc',
        orderby: 'id',
        perPage: 2,
    });
```

Check the [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/reference/) for all available resources and parameters.

#### `get`

A helper for the `request` method which can be used like the examples below:

Retrieves posts.
```
const query = new WPQuery('https://demo.wp-api.org').get();
```

Retrieves posts published by a specific author.
```
const query = new WPQuery('https://demo.wp-api.org')
    .get('posts', {
        author: 103,
    });
```

Retrieves posts published in a specific category.
```
const query = new WPQuery('https://demo.wp-api.org')
    .get('posts', {
        category: 11,
    });
```

Check the [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/reference/) for all available resources and parameters.

### Compatibility

WPQuery.js supports the latest, stable releases of all major browsers except Internet Explorer.

We use JavaScript promises as they offer superior advantages than event listeners. You can find browser compatibility statistics for Promises on [Can I use...](https://caniuse.com).

However, for a quick overview - read the table below which shows you the browser support for WPQuery.js. All browser tests are conducted with [Browser Stack](https://browserstack.com).

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Microsoft Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Mozilla Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Google Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| >=12 | >=30 | >=32 | >=7.1 | >=20 |

### Contributing

Feel free to submit a pull request with any changes that will help make this project better!
