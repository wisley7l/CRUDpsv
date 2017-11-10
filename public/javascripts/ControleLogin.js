
appA.controller('TelaLogin', TelaLogin);

function TelaLogin ($http,localStorageService,$mdDialog,$scope){
    mudaHome();
        



   function btOk(){
        var cpf = $scope.cpf;
        var senha =$scope.senha;
        //console.log(cpf+":"+senha);
        getlogin(cpf,senha,localStorageService,$http,$mdDialog);
        $mdDialog.hide();
        
        
   }
function cancela(){
        $mdDialog.hide();
    }

   

    return{
        //pessoas : people,
        //cidades : city,
        salvar: btOk,
        cancelar:cancela,
        
    }
} // fim do controle telaADD
//* 