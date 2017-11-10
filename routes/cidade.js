var sql = require('mssql');
var express = require('express');
var router = express.Router();


const config = {
    user: 'sa',
    password: 'alves9846',
    server: 'localhost',
    database:"bd_wisley", 
    port: 54137,
            
    
    
};

router.get('/', function (req, res, next) {

//* 
        sql.close();
        sql.connect(config, err => {
        if (err) console.log(err)
        //envia consultas de cidades  
        // 'select c.id_cidade ,c.nom_cidade,e.uf_estado from cidade c, estados e where c.id_estado = e.id_estado '
        //'select c.id_cidade ,c.nom_cidade from cidade c'
        new sql.Request()
        .query('select c.id_cidade ,c.nom_cidade,c.id_estado from cidade c'
        , (err, pessoas) => {
            if (err) return next(err)
           sql.close(); 
           console.log(pessoas.recordset);
            res.json(pessoas.recordset);                      
        })
        
    })// sql connect //*/
    //sql.close();
});// router.get 


module.exports = router;
