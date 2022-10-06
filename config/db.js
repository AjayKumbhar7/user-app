import mysql from 'mysql'

export const connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    database: 'user-app'
})

connection.connect((error, result) => {
    if (error) {
        throw Error(error)
    }
    console.log('Connected To MySQL');
})
