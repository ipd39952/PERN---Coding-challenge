const pool = require('./database')
const data = require('./data.json')

const checkDatabaseAndSeed = async () => {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT count(*) FROM data', async (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log('Connected')
      // Check if there are 0 rows in the 'data' table
      if (result.rows[0].count === '0') {
        console.log('Seeding database')
        let counter = 0

        // Using for-of loop to be able to use await
        for (const user of data) {
          try {
            await pool.query(
              `
              INSERT INTO data (_id, age, eye_color, name, gender, company, email, phone, address)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
              `,
              [
                user._id,
                user.age,
                user.eyeColor,
                user.name,
                user.gender,
                user.company,
                user.email,
                user.phone,
                user.address,
              ]
            )
            counter += 1
          } catch (err) {
            console.log(err)
          }
        }
        console.log(`Completed. ${counter} users stored.`)
      } else {
        console.log('Database is not empty, proceeding')
      }
    })
  })
  // const results = await pool.query('SELECT count(*) FROM data')
}

module.exports = checkDatabaseAndSeed
