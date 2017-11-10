appA.controller('TelaLISTA', TelaLISTA);
//
function TelaLISTA ($http,$scope,localStorageService, $mdDialog,$timeout,$interval){
        mudaBt2();
        console.log(localStorageService.keys());
      carregaBD($interval,$timeout,$http,$scope);
    ordenarCidade(city);

function atualizar (){
    Bexibir = false;
    window.location.reload();
}

function limpa(){
   
     localStorageService.clearAll(); 
    window.location.href = "#!/home";// executa a page1      
}

function remove(cpf){
    
    deletePessoa(cpf,$http,$mdDialog);
    
}

function edit(cpf){
    window.sessionStorage.setItem('cpf', cpf);// envia para o proxima page o 'cpf'
    window.location.href="#!/EditPessoa"
}
      
function popup(cpf){
    window.sessionStorage.setItem('cpf', cpf);// envia para o proxima page o 'cpf'
    $mdDialog.show({
            controller : TelaEdit,
			controllerAs : 'Ctrl',
			templateUrl : '/pages/PopUpEdit.html'
		}

        );

  };

function Add(){
     $mdDialog.show({
            controller : TelaADD,
			controllerAs : 'Ctrl',
			templateUrl : '/pages/PopUpAdd.html'
		}

        );

}

       return{
           pessoas:people,
           atualizar:atualizar,
           limpar : limpa,
           remove:remove,
           edit : edit,
           popup:popup,
           Add:Add,
          
       }
      
    };// fim do controle TelaLISTA