const util = require('util')
const mysql2 = require('mysql2')

const credentials = {host: 'localhost',
user: 'root',
password: '',
port: 3306,
database: 'employees'
}

const connection = mysql2.createConnection(credentials)
connection.connect()
connection.query = util.promisify(connection.query)

module.exports=connection