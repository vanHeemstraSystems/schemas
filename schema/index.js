var SchemaRethinkDB = require(__dirname+'/rethinkdb.js');

var self = this; // set the context locally, for access protection

/**
 * Create a new Schema that let users create sub-schema.
 * @return {Schema}
 */
function Schema() {
  console.log('schemas schema - Schema called');   
}

Schema.prototype.rethinkdb = function() {
  return new SchemaRethinkDB();
}

module.exports = Schema;