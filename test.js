const test = require('tap').test
const nano = require('nano')

const nanoOption = require('./')

test('from server url string', function (t) {
  const db = nanoOption('http://localhost:5984')

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    requestDefaults: {
    },
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})

test('from object with server url string with trailing slash', function (t) {
  const db = nanoOption({
    url: 'http://localhost:5984/'
  })

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    requestDefaults: {
    },
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})

test('from server url string with trailing slash', function (t) {
  const db = nanoOption('http://localhost:5984/')

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    requestDefaults: {
    },
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})

test('from db url string', function (t) {
  const db = nanoOption('http://localhost:5984/mydb')

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    db: 'mydb',
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})

test('from db url string with trailing slash', function (t) {
  const db = nanoOption('http://localhost:5984/mydb/')

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    db: 'mydb',
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})

test('from config object', function (t) {
  const db = nanoOption({
    url: 'http://localhost:5984/mydb'
  })

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    db: 'mydb',
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})

test('from config object without url throws', function (t) {
  t.throws(() => nanoOption({}))
  t.end()
})

test('with advanced object', function (t) {
  const db = nanoOption({
    url: 'http://localhost:5984',
    db: 'mydb',
    parseUrl: false,
    defaultHeaders: {
      'X-Couch-Full-Commit': 'false',
      foo: 'bar'
    }
  })

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    db: 'mydb',
    parseUrl: false,
    requestDefaults: {
    },
    defaultHeaders: {
      'X-Couch-Full-Commit': 'false',
      foo: 'bar'
    }
  })
  t.end()
})

test('with nano object', function (t) {
  const db = nanoOption(nano('http://localhost:5984/mydb'))

  t.equal(typeof db, 'object')
  t.equal(typeof db.config, 'object')
  t.same(db.config, {
    url: 'http://localhost:5984',
    db: 'mydb',
    defaultHeaders: {
      'X-Couch-Full-Commit': 'true'
    }
  })
  t.end()
})
