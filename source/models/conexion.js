const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host: 'trabajofinal.ctlwycwkozbk.us-east-1.rds.amazonaws.com',
    user: 'UrielRojas',
    password: 'Reynosa2452',
    database: 'sistema'
});

sqlConnecion.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
