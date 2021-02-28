const nano = require('nano')
const defaultsDeep = require('lodash/defaultsDeep')
const assign = require('lodash/assign')

const nanoDefaults = {
  defaultHeaders: {
    'X-Couch-Full-Commit': 'true'
  }
}

function isNanoAdapter (option) {
  return typeof option.config === 'object'
}

function makeNanoAdapter (option) {
  if (typeof option === 'string') {
    const url = option.replace(/\/$/, '')
    return nano(url)
  }

  if (typeof option === 'object' && option.url) {
    return nano(assign({}, option, {
      url: option.url.replace(/\/$/, '')
    }))
  }

  return nano(option)
}

module.exports = function (option) {
  const db = isNanoAdapter(option) ? option : makeNanoAdapter(option)

  defaultsDeep(db.config, nanoDefaults)

  return db
}
