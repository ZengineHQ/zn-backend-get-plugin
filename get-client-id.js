'use strict';

const getPlugin = require('./get-plugin');

function getPluginClientId(namespace) {

    return getPlugin(namespace)
        .then(function(plugin) {

            if (!plugin) {
                return;
            }

            return plugin.client && plugin.client.apiKey;
            
        });

}

module.exports = getPluginClientId;
