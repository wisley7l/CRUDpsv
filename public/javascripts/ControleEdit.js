// nome o controle da rota Edit
appA.controller('TelaEdit',TelaEdit);

function TelaEdit(localStorageService,$http,$mdDialog,$scope, $location,$timeout){
    mudaBt2();
    
    ordenarCidade(city);
    
    var tcpf = window.sessionStorage.getItem('cpf');    
    var  p = FBusca().buscaPorCpf(tcpf);

    var pessoa ={
        cpf : p.info.cpf,
        nom_pessoa: p.info.nom_pessoa,
        idade_pessoa: parseInt(p.info.idade_pessoa),
        sexo: p.info.sexo,
        nom_cidade: p.info.nom_cidade,
        end_pessoa:p.info.end_pessoa,
        uf_estado : p.info.uf_estado,
    }
    
    var PosSexo = FBusca().buscaPosSexo(pessoa.sexo);
    var PosCidade = FBusca().buscaPosCidade(pessoa.nom_cidade);
    //
    cidadeSelect = city[PosCidade];
    Selectsexo = vecSexo[PosSexo];

    function fsalvar(){

    pessoa.cpf  = document.getElementById("cpf").value;
    pessoa.nom_pessoa  =document.getElementById("nome").value;
    var idade =document.getElementById("idade").value;
    var sexo = $scope.Selectsexo;
    pessoa.end_pessoa  = document.getElementById("end").value;
    var cidade = $scope.escolhidoCidade;
    var idcidade = cidade.cidade.id_cidade;
    var cityy = FBusca().nomeCidade(idcidade);
    pessoa.idade_pessoa = parseInt(idade);
    pessoa.idcidade = idcidade;
    var estado = FBusca().buscaEstado(cidade.cidade.id_estado);
    console.log(estado.estados.uf_estado);
    pessoa.uf_estado = estado.estados.uf_estado;

    pessoa.nom_cidade = cityy.cidade.nom_cidade;
    pessoa.sexo = FBusca().buscaSexoPorKey(sexo.$$hashKey);
    
    
    if(idade == ""){
    pessoa.idade_pessoa = 0;    
    }
    var posPessoa = FBusca().buscaPosPessoa(pessoa.cpf);
    people.splice(posPessoa,1);
    updatePessoa(pessoa,$http,$mdDialog);
    ordenarPessoas(people);
            
}
    function cancela(){
        $mdDialog.hide();
    }

//
    $scope.Selectsexo = Selectsexo;
    $scope.escolhidoCidade = cidadeSelect;
    var posEstado = cidadeSelect.cidade.id_estado-1;
    $scope.escolhidoEstado = states[posEstado];

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

    function geraLista(){
        var e = $scope.escolhidoEstado;
        listaC = geraListaCidades(e);
        console.log(listaC);
        $scope.cidades = listaC;    
    }
    
    $scope.cidades = listaC;
    return{
        vecSexo : vecSexo,
        pessoa: pessoa,
        cancelar:cancela,
        Bok:fsalvar,
        estados : states,
        gListaC : geraLista,
    }
}
