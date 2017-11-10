var people = [];
var city = [];
var states =[];
var user;
var vecSexo = [{id:'f',name:'Feminino'},{id:'m',name:'Masculino'}];
var cidadeSelect;
var Selectsexo;
var DiaSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feria','Quinta-feira','Sexta-feira','Sabado'];
var MesAno =['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];


appA.controller('home',TelaIncialCtrl);

 function TelaIncialCtrl (localStorageService,$http,$scope,$mdDialog,$timeout,$interval){
    mudaHome();
    carregaBD($interval,$timeout,$http,$scope);
    
    
    function data(){
    }
    var hj = new Date();
    var mes = hj.getMonth();
    var ano = hj.getFullYear();
    var dia = hj.getDate();
    var semana = hj.getDay();

    var hoje = DiaSemana[semana]+": "+dia+" de "+MesAno[mes]+" de "+ano;
    $scope.hoje = hoje;

/*
 $timeout( function(){
        $scope.estadoEscolhido = states[0];               
        }, 1500 );
//*/



var listaCidades = [];

//$scope.listaCidades = listaCidades;
//$scope.cidadeEscolhida = listaCidades[0];
//$scope.estadoEscolhido = states[0];
//cidadesEstado($scope.estadoEscolhido);
/*
function cidadesEstado(estado){
    if(!estado){
        return;
    }
    listaCidades =[];
    console.log(estado);
    var id = estado.estados.id_estado;
    
    for(var cont =0;cont<city.length;cont++){
        if(city[cont].cidade.id_estado == id){
            listaCidades.push(city[cont]);
        }
    }

}
//var cond =0;
//*/
/*
 $timeout( function(){
               cidadesEstado($scope.estadoEscolhido);
               $scope.listaCidades = listaCidades;
                $scope.cidadeEscolhida = listaCidades[0];
        }, 2000 );
//*/
/*
function cliqC(){
    console.log("Aki");
    cidadesEstado($scope.estadoEscolhido);
    $scope.listaCidades = listaCidades;
    $scope.cidadeEscolhida = listaCidades[0];
}
function cliqE(){
    $scope.listaCidades = [];
    $scope.cidadeEscolhida = 'Carregando...';      
}
//*/

    return{
        //teste : login,
        data:data,
        estados : states,
        //cliqC : cliqC,
        //cliqE:cliqE,
    }
    
}// fim do controle tela HOME
