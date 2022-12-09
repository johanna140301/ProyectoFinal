const express = require ('express');
const mysql = require ('mysql2');
const app = express();
const ejs = require('ejs');


const PORT = process.env.PORT || 4000
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || '12345678'
const DB_NAME = process.env.DB_NAME || 'ElPatioDeBeto'
const DB_PORT = process.env.DB_PORT || 3306

const connection = mysql.createConnection({
    host : DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
})

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', (req, res) =>{
    connection.query('select * from hamburguesas', (error, rows) =>{
        if(error) throw error;

        if(!error){
            console.log(rows);
            res.render('index', {rows}); //Indica el HTML que se quiere abrir 
        }
    });
})



app.listen(PORT)
console.log('servidor en linea');


