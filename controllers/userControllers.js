const pool = require('../models/userModels')
const md5 = require('md5');

exports.userController = (req, res)=>{
    const username = req.body.username;
    const password = md5(req.body.password);
   
    const allData = pool.query(`SELECT * FROM user_data WHERE username="${username}"`, (err, result) => {
        if (err) throw err;
        if (result.length == 0){
            pool.query(`INSERT INTO user_data (username, password, isActive ) VALUES(  '${username}', '${password}', 'Active')`, (err) => {
                if (err) throw err;
                res.send("you are registered")
            })
            
        }
        else {
            res.send("user exists on this username");
        }
    })
}


exports.userAuth= (req,res)=>{
    const authData=pool.query(`SELECT * FROM user_data WHERE username="${req.body.username}"`, (err, result)=>{
        if(err) throw err;
        if(result[0]==null){
            res.send("wrong username");
        }
        else{
            if(result[0].password==md5(req.body.password)){
                res.send("you are authenticated");
            }
            else{
                res.send("wrong Password");
            }
        }
    })
}

