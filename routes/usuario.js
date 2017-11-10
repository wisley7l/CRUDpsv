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

router.get('/:cpf', function (req, res, next) {
console.log("LOGIN");
console.log(req.params.cpf);

    if(req.params.cpf != 'undefined' ){
        //console.log("ERRO");
        
    
//* 
        sql.close();
        sql.connect(config, err => {
        if (err) console.log(err)
        //envia consultas de cidades 
        new sql.Request()
        .query('select login,senha from usuarios '
        , (err, pessoas) => {
            if (err) return next(err)
           sql.close(); 
           console.log(pessoas.recordset);
            res.json(pessoas.recordset);                      
        })
        
    })// sql connect //*/
}
else{
    
    return next(err);
}
    //sql.close();
});// router.get 


module.exports = router;
