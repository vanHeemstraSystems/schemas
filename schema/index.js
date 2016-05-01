var SchemaRethinkDB = require(__dirname+'/rethinkdb.js');

var self = this; // set the context locally, for access protection

/**
 * Create a new Schema that let users create sub-schema.
 * @return {Schema}
 */
function Schema() {
  console.log('schemas schema - Schema called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._error = {};  // will be set, before passing on to mapping  
  self._type = {}; // will be set, before passing on to mapping
  self._utility = {};   // will be set, before passing on to mapping  
}

Schema.prototype.error = function() {
  return self._error;
}

Schema.prototype.seterror = function(fnOrValue) {
  self._error = fnOrValue;
}

Schema.prototype.type = function() {
  return self._type;
}

Schema.prototype.settype = function(fnOrValue) {
  self._type = fnOrValue;
}

Schema.prototype.utility = function() {
  return self._utility;
}

Schema.prototype.setutility = function(fnOrValue) {
  self._utility = fnOrValue;
}

Schema.prototype.rethinkdb = function() {
  this._schemarethinkDB = new SchemaRethinkDB();
  this._schemaRethinkDB.seterror(self.error());
  this._schemaRethinkDB.settype(self.type());
  this._schemaRethinkDB.setutility(self.utility());  
  //ORIGINAL return new SchemaRethinkDB();
  return this._schemaRethinkDB;
}

module.exports = Schema;