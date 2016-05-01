/*
 * schemas.js
 */
var SchemasSchema = require(__dirname+'/schema.js');

/**
 * Create a new Schemas that let users create sub-schemas.
 * @return {Types}
 */
function Schemas() { }

/**
 * Create a new SchemasSchema object.
 * @return {SchemasSchema}
 */
Schemas.prototype.type = function() {
  return new SchemasSchema();
}

module.exports = Schemas;


// REMOVE ALL BELOW

// /*
//  * Schemas
//  * 
//  * param: database (e.g. 'rethinkdb')
//  */
// module.exports = function(database) {
//   var database = toLowerCase(database);
//   var _Schemas = {};
//   var path = require('../libraries/path');
//   var paths = require('../paths/paths');
//   config = require(path.join(paths.configurations, '/configurations.js'))(database);
//   var common = config.common,
//   server_prefix = common.server_prefix || 'PREFIX';
//   console.log(server_prefix + " - Schemas database required.");
//   _Schemas.database = require('./' + database + '.js');
//   return _Schemas;
// };//does not call itself
