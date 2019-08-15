'use strict';

const znHttp = require('../../../lib/zn-http');

const formatApiData = require('./lib/format-api-data');

function getPlugin(namespace) {

    return znHttp().get('/plugins', { params: { namespace: namespace } })
        .then(formatApiData)
        .then(function(plugins) {

            if (!plugins || !plugins.length) {
                return;
            }

            return plugins.shift();

        });

}

module.exports = getPlugin;
