const merge = require('deepmerge');
const orpheusConfig = require('./orpheus.preset.js');

function withOrpheus(tailwindConfig) {
	return merge(orpheusConfig, { ...tailwindConfig });
}

module.exports = withOrpheus;
