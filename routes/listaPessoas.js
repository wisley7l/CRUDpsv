var express = require('express');
var router = express.Router();

var sql = require('mssql');

const config = {
    user: 'sa',
    password: 'alves9846',
    server: 'localhost',
    port: 54137,
    database:"bd_wisley"
};


router.get('/', function (req, res, next) {
    //*
        sql.close();
        sql.connect(config, err => {
        if (err) return next(err)
        //envia consultas de pessoas 
        new sql.Request()
        .query('select p.cpf,p.nom_pessoa,p.sexo,p.idade_pessoa,p.end_pessoa,c.nom_cidade, e.uf_estado from pessoa p,cidade c, estados e where (p.id_cidade = c.id_cidade and c.id_estado = e.id_estado) order by 2 '
        , (err, pessoas) => {
            if (err) return next(err)
           sql.close(); 
           //console.log(p);
            res.json(pessoas.recordset);                      
        })
        
    })// sql connect //*/
   
});// router.get 

//*
router.post('/', function (req, res, next) {
  
    //*
    console.log(req.body);
            
    if(req.body.end_pessoa==null){
        req.body.end_pessoa ="";
    }
        sql.close();
if(req.body.cpf!=null && req.body.nom_pessoa!=null){
        sql.connect(config, err => {
         if (err) return next(err)
        
        
        //envia consultas de pessoas 
        new sql.Request()
        .query("insert into pessoa values("+"'"+ req.body.cpf +"'"+","+"'"+ req.body.nom_pessoa+"'"
        + ","+ req.body.idade_pessoa +","+"'"+req.body.sexo+"'" +","+ req.body.id_cidade +","+"'"+req.body.end_pessoa+"'" +")"
        , (err, pessoas) => {
            if (err) {
              console.log(':('+err);
              return next(err);
           }
           return res.send('Successfully inserted');                      
        })
        
    })// sql connect 
}// fim do if
else {
    console.log("Erro ao inserir");
}
    

});// router.post

router.delete( '/:id',function(req,res,next){

    console.log("Aki garoto");
    //console.log(typeof req.params.id);
sql.close();
if(req.params.id!=null){
        sql.connect(config, err => {
         if (err) return next(err)
        
        
        //envia consultas de pessoas 
        new sql.Request()
        .query("delete from pessoa where cpf = " + "'"+ req.params.id +"'"
        , (err, pessoas) => {
            if (err) {
              console.log(':('+err);
              return next(err);
           }
           //console.log(pessoas);
           console.log("Removido");
           return res.send(pessoas);
        })
        
    })// sql connect 
}// fim do if
else {
    console.log("Erro");
    return next (err);
}

});//router delete

router.post('/:id',function(req,res,next){
    console.log("Aki para editar");
    var pessoa = req.body ;
    console.log(pessoa);
//*
sql.close();
if(req.params.id!=null){
        sql.connect(config, err => {
         if (err) return next(err)        
        //envia consultas de pessoas 
        new sql.Request()
        .query("update pessoa set nom_pessoa = "+
        "'"+req.body.nom_pessoa+"',idade_pessoa = "+ req.body.idade_pessoa+",sexo = "+"'"+req.body.sexo+"'"+
        ",id_cidade = "+req.body.idcidade+",end_pessoa = "+"'"+req.body.end_pessoa+"'"+
        " where cpf = "+"'"+req.params.id+"'"
        , (err, pessoas) => {
            if (err) {
              console.log(':('+err);
              return next(err);
           }
           console.log("Editado");
           return res.send(pessoa.recordsets);                      
        })
        
    })// sql connect 
}// fim do if
else {
    console.log("Erro");
}
//*/


});// router.post



//*/
//});




module.exports = router;