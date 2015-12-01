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

function makeNanoAdapter(option) {
  if (typeof option === 'string') {
    var url = option.replace(/\/$/, '')
    return nano(url)
  }

  return nano(option)
}

module.exports = function(option) {
  var db = isNanoAdapter(option) ? option : makeNanoAdapter(option)

  defaultsDeep(db.config, nanoDefaults)

  return db
}
