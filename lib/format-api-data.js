'use strict';

function formatApiData(response) {

	const body = response.getBody();

	return body.data || [];

}

module.exports = formatApiData;