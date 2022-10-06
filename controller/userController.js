import { connection } from '../config/db.js'

export const getAllUser = (req, res) => {
    connection.query('SELECT * FROM USER',
        (error, result) => {
            // console.log(error);
            // console.log(result);
            res.status(200).send(result);
        })
}

export const createUser = (req, res) => {

    const {
        firstname, lastname, username, email, phone, created, updated
    } = req.body

    connection.query('INSERT INTO USER SET FIRSTNAME = ?, ' +
        'LASTNAME = ?, USERNAME = ?,  EMAIL = ?, PHONE = ?, CREATED = ?, UPDATED = ?',
        [firstname, lastname, username, email, phone, created, updated],
        (error, result) => {
            // console.log(error);
            // console.log(result);
            res.status(201).send({
                message: 'user created successfully',
                statusCode: 201
            })
        })
}
