// nomei a controle para a page ADD 
appA.controller('TelaADD', TelaADD);

function TelaADD ($http,localStorageService,$mdDialog,$scope){
    mudaBt2();
    
    ordenarCidade(city);
        cidadeSelect = city[0];
        Selectsexo = vecSexo[0];

        $scope.escolhido = cidadeSelect;
        $scope.Selectsexo = Selectsexo;

   function btOk(){
        var cpf = $scope.cpf;
        var nome =$scope.nom_pessoa;
        var idade =$scope.idade_pessoa;
        var end =$scope.end_pessoa;
        //var idCidade = FBusca().buscaCidadePorKey($scope.escolhido.$$hashKey);
        var sexy = FBusca().buscaSexoPorKey($scope.Selectsexo.$$hashKey);
        var trata = FBusca().trataNulos(cpf,nome,end);
        
        p = {
            cpf : trata.cpf,
            nom_pessoa: trata.nome,
            sexo : sexy,
            idade_pessoa: parseInt(idade),
            end_pessoa: trata.end,
            id_cidade :$scope.escolhidoCidade.cidade.id_cidade,
            nom_cidade:$scope.escolhidoCidade.cidade.nom_cidade,
            uf_estado:$scope.escolhidoEstado.estados.uf_estado,
        }
        console.log(p);

        if(idade == undefined){ // trata idade para nao aparecer NaN na tela.
           p.idade_pessoa = 0;
        }
        setPessoa($http,p,$mdDialog);
        }

function atualizar (){
    console.log('Atualiza');
    getPessoas($http);
    window.location.reload();
}
function cancela(){
        $mdDialog.hide();
    }



   function geraListaCidades(estado){
        //console.log(estado);
        var id = estado.estados.id_estado;
        console.log(id);
        if(!id){
            return;
        }
        var listaCidades =[];
        //*
        for(var cont= 0; cont< city.length;cont++){
            var c = city[cont];
            if(city[cont].cidade.id_estado==id){
                listaCidades.push(c);
            }//fim do if
        }// fim do for */
        return listaCidades;
    }
    var listaC = [];
    $scope.escolhidoEstado = states[0];
    function geraLista(){
        var e = $scope.escolhidoEstado;
        listaC = geraListaCidades(e);
        console.log(listaC);
        $scope.cidades = listaC;    
    }
    
    $scope.cidades = listaC;




    return{
        pessoas : people,
        cidades : city,
        //escolhido: cidadeSelect,
        //Selectsexo: Selectsexo,
        vecSexo : vecSexo,
        //atualizar:atualizar,
        salvar: btOk,
        cancelar:cancela,
        estados : states,
        gListaC : geraLista,
        
    }
} // fim do controle telaADD
//* 