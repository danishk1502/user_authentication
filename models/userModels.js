const {createPool} = require("mysql");

const data = createPool({
    host:"localhost",
    user: "root",
    password:"",
    database:"user_auth"
})

module.exports = data;