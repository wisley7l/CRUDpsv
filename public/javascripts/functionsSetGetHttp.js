appA.factory('getPessoas', getPessoas);
appA.factory('getCidades', getCidades);

function getPessoas($http){
        
           $http.get('/lista')
           .then(function (success){  
            for(var cont = 0 ; cont < success.data.length;cont++){
               var sexy;
               if(success.data[cont].sexo == 'm'){
                   sexy = 'Masculino';
               }else if(success.data[cont].sexo == 'f'){
                    sexy = 'Feminino';
               }     
                p = {
                    info : success.data[cont],
                    sexo : sexy
                }
                people.push(p);
            }
              
        },function (error){ });

        console.log("Fez Get Pessoa");
    
}  // get pessoas função 


function getCidades($http){
           $http.get('/cidades')
           .then(function (success){ 
            for(var cont = 0 ; cont < success.data.length;cont++){
               var p = {
                    cidade : success.data[cont],
                }
                city.push(p);
            }
              
        },function (error){ });

        console.log("Fez Get Cidade");
    
}  // get estados função 


function getEstados($http){
           $http.get('/estados')
           .then(function (success){ 
            for(var cont = 0 ; cont < success.data.length;cont++){
               var p = {
                    estados : success.data[cont],
                }
                states.push(p);
            }
              
        },function (error){ });

        console.log("Fez Get Estado");
    
}  // get estados função 






function setPessoa($http,pessoa,$mdDialog){
    var p ;
        $http.post('/lista', pessoa) .then(function(success){
            if(pessoa.sexo == 'm'){
                   sexy = 'Masculino';
               }else if(pessoa.sexo == 'f'){
                    sexy = 'Feminino';
               }     
                p = {
                    info : pessoa,
                    sexo : sexy
                }
               
        people.push(p);
        ordenarPessoas(people);
        $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Mensagem')
        .textContent('Adicionado com Sucesso!')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
        );
                  
        },function(err){
            //alert(err);
        $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Mensagem')
        .textContent('Ocorreu um erro !'+err)
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
        );
        });    
    console.log("Fez Set Pessoa");
}

function deletePessoa(id,$http,$mdDialog){
    console.log("Remover: "+id);
    
    $http.delete('/lista/'+id).then(function(sucess){
        
        var pos = FBusca().buscaPosPessoa(id);
        people.splice(pos,1);
        $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Mensagem')
        .textContent('Removido com Sucesso!')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
     );},

    function(err){
        $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Mensagem')
        .textContent('Ocorreu um erro'+err)
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')

             

    );

    

});
    
            
}

function ordenarPessoas(people) {
            people.sort(function(a,b){
                var r = 0;
                var cont = 0 ;
            while(r == 0){
                var a1 = a.info.nom_pessoa.charCodeAt(cont);
                var b1 = b.info.nom_pessoa.charCodeAt(cont);
                r = a1 - b1;
                cont++;
            }
            return r;
            })    
	}

    function ordenarCidade(city) {
            city.sort(function(a,b){
                var r = 0;
                var cont = 0 ;
            while(r == 0){
                var c1 = a.cidade.uf_estado+a.cidade.nom_cidade;// concatena uf com nome da cidade a
                var c2 = b.cidade.uf_estado+b.cidade.nom_cidade;// concatena uf com o nome da cidade b 
                                                                //para ordenar pelo nome dps que ordenar pela uf
                var a1 = c1.charCodeAt(cont); //
                var b1 = c2.charCodeAt(cont);//
                r = a1 - b1;// 
                cont++;
            }
            return r;
            })    
	}

function updatePessoa(pessoa,$http,$mdDialog){
    
     $http.post('/lista/'+pessoa.cpf, pessoa) .then(function(success){
    
            if(pessoa.sexo == 'm'){
                   sexy = 'Masculino';
               }else if(pessoa.sexo == 'f'){
                    sexy = 'Feminino';
               }     
                p = {
                    info : pessoa,
                    sexo : sexy
                }
                people.push(p);
                ordenarPessoas(people);
                $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Mensagem')
        .textContent('Editado com Sucesso!')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
             

    );//*/
         
        },function(err){
            $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Mensagem')
        .textContent('Ocorreu Um erro')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
             

    );//*/
        });
        console.log("Realizou UpDate: "+pessoa.cpf);
            
}
