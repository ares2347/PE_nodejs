const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

class Database{
    _server;
    _db;
    
    constructor(){
        this._server = process.env.MONGO_CONNECTION_STRING;
        this._db = process.env.MONGO_DATABASE;
        this._connect();
    }


    _connect(){
        mongoose.connect(`${this._server}/${this._db}`)
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) =>{
            console.log("🚀 ~ file: index.js:18 ~ db connection error:", err)
        });
    }
}

module.exports = new Database();

