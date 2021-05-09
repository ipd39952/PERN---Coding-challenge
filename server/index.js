const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./database')
const checkDatabaseAndSeed = require('./seeding')

// middleware
app.use(cors())

// routes
app.get('/users', async (req, res) => {
  console.log('Hi')
  try {
    const allUsers = await pool.query('SELECT * FROM data')
    res.json(allUsers.rows)
  } catch (err) {
    res.status(400).json(`Error: ${err}`)
  }
})

app.delete('/users', async (req, res) => {
  try {
    await pool.query('DELETE FROM data')
    res.status(200).json('All users deleted!')
  } catch (err) {
    res.status(400).json(`Error: ${err}`)
  }
})

app.listen(5000, () => {
  checkDatabaseAndSeed()
  console.log('Server has started')
})
