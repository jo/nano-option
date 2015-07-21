var nano = require('nano')
var defaultsDeep = require('lodash/object/defaultsDeep')

var nanoDefaults = {
  defaultHeaders: {
    'X-Couch-Full-Commit': 'true'
  }
}

function isNanoAdapter(option) {
  return typeof option.config === 'object'
}

module.exports = function(option) {
  var db = isNanoAdapter(option) ? option : nano(option)

  defaultsDeep(db.config, nanoDefaults)

  return db
}
