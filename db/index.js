// //本地
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1122',
    port: '3306',
    database: 'book_system_db',
})

module.exports = db
// const mysql = require('mysql')

// const db = mysql.createPool({
//     host: '43.138.209.91',
//     user: 'root',
//     password: 'eAPYZNjsEaRCbEBC',
//     port: '3306',
//     database: 'book_system_db',
// })

// module.exports = db
