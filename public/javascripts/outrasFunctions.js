function FBusca(){

function buscaEstado(id){
    if(!id){
        return;
    }

    for(var cont =0;cont < states.length;cont++){
        if(states[cont].estados.id_estado==id){
            return states[cont];
        }
    }

}




            function buscaCidadePorKey(chave){
        if (!chave){
            return;
        }

            for (var cont = 0; cont < city.length; cont ++){
           if(city[cont].$$hashKey == chave){
               return city[cont].cidade.id_cidade;
           }//fim do if
        }//fim do for

    }
    
    function buscaSexoPorKey(chave){
        if (!chave){
            return;
        }

            for (var cont = 0; cont < vecSexo.length; cont ++){
           if(vecSexo[cont].$$hashKey == chave){
               return vecSexo[cont].id;
           }//fim do if
        }//fim do for

    }

    function trataNulos(cpf,nome,end){
        if (cpf==""){
                        cpf = null;
        }
        if (nome == ""){
                        nome = null;
        }
        var retorno ={
                        cpf:cpf,
                        nome: nome,
                        end:end,
        }
        return retorno;
    }


    function buscaPosCidade(cidade){
        if(!cidade){
            return undefined;
        }
        for(var cont = 0;cont < city.length;cont++){
            if(city[cont].cidade.nom_cidade==cidade){
                return cont;
            }
        }

    }
    function buscaPosSexo(sexo){
        if(!sexo){
            return undefined;
        }
        for(var cont = 0;cont < vecSexo.length;cont++){
            if(vecSexo[cont].id==sexo){
                return cont;
            }
        }

    }

function buscaPorCpf(cpf){
        if(!cpf){
            return undefined;
        }
        for(var cont = 0; cont< people.length;cont++){
            if(people[cont].info.cpf==cpf){
                return people[cont];
            }
        }
        return undefined;
    }

function nomeCidade(id){
        if(!id){
            return undefined;
        }
        for(var cont = 0;cont<city.length;cont++){
            if(city[cont].cidade.id_cidade==id){
                return city[cont];
            }
        }
    }


    function buscaPosPessoa(cpf){

    if(!cpf){
        return undefined;
    }

    for(var cont= 0;cont<people.length;cont++){
        if(people[cont].info.cpf==cpf){ 
            return cont;
        }
    }

}

function buscaPessoaId(cpf){

    if(!cpf){
        return undefined;
    }

    for(var cont= 0;cont<people.length;cont++){
        if(people[cont].info.cpf==cpf){
            return people[cont];
        }
    }

    }

    return {
        buscaCidadePorKey:buscaCidadePorKey,
        buscaSexoPorKey:buscaSexoPorKey,
        trataNulos:trataNulos,
        buscaPosSexo : buscaPosSexo,
        buscaPosCidade : buscaPosCidade,
        buscaPorCpf:buscaPorCpf,
        nomeCidade:nomeCidade,
        buscaPosPessoa:buscaPosPessoa,
        buscaPessoaId:buscaPessoaId,
        buscaEstado:buscaEstado,
    }
}
/*
function recuperaPessoas(localStorageService){
           console.log("Fez Recupera Pessoa");
           var chaves = localStorageService.keys();
           //console.log(chaves);
           if(!chaves){
               return
           }

           for(var cont = 0;cont<chaves.length;cont++){
               var p = localStorageService.get(chaves[cont]);
               if(p.info != undefined){
                people.push(p);
               }   
           }
       }// recupera pessoas função


function recuperaCidades(localStorageService){
           console.log("Fez Recupera Cidades");
           var chaves = localStorageService.keys();
          // console.log(chaves);
           if(!chaves){
               return
           }

           for(var cont = 0;cont<chaves.length;cont++){
               var p = localStorageService.get(chaves[cont]);
               if(p.cidade !=undefined){
                city.push(p);
               }  
           }
       }// recupera Estado função
       
//*/


    function carregaBD($interval,$timeout,$http,$scope){
    city =[];
    people=[];
    states =[];

        $timeout( function (){getEstados($http);}, 1 );
        
        $timeout( function(){getCidades($http);}, 500 );
        $timeout( function(){getPessoas($http);}, 1000 );
           
            console.log(people);
            console.log(states);
            console.log(city);
    }