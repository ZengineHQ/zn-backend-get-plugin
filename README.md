# zn-backend-get-plugin

Module to get a plugin and plugin api client id by namespace. Useful when making certain API requests, such as file uploads, that require an OAuth 2 client id. Plugin and backend service must be marked as `offline` to have a client id.

## Installation

```bash
npm i @zenginehq/backend-get-plugin --save
```

## Usage

```js
const $getPlugin = require('@zenginehq/backend-get-plugin');

exports.run = function(eventData) {

    $getPlugin(eventData.request.params.pluginNamespace)
        .then(function(plugin) {

            // ...

        });

};
```

```js
const $getPluginClientId = require('@zenginehq/backend-get-plugin/get-client-id');

exports.run = function(eventData) {

    $getPluginClientId(eventData.request.params.pluginNamespace)
        .then(function(clientId) {

            // ...

        });

};
```
