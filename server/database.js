const { Pool } = require('pg')
const pool = new Pool({
  host: 'db',
  user: 'alteos',
  password: '123456',
  database: 'alteos',
})

module.exports = pool
