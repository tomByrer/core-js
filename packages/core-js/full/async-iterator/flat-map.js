require('../../modules/es.object.to-string');
require('../../modules/es.promise.constructor');
require('../../modules/es.promise.resolve');
require('../../modules/esnext.async-iterator.constructor');
require('../../modules/esnext.async-iterator.flat-map');

var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('AsyncIterator', 'flatMap');