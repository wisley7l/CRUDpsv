mudaHome = function(){
    var classe = document.getElementById('home').className;

    if(classe == ''){
        document.getElementById('home').className= "active";
        document.getElementById('Bhome').style = "color:black";
        document.getElementById('2').className= "";
        document.getElementById('BLista').style = "color:azure";
        document.getElementById('3').className= "";
        document.getElementById('BGraf').style = "color:azure";

    }
}
//color:azure

mudaBt2 = function(){
    
    var classe = document.getElementById('2').className;
    if(classe == ''){
        document.getElementById('home').className= "";
        document.getElementById('Bhome').style = "color:azure";
        document.getElementById('2').className= "active";
        document.getElementById('BLista').style = "color:black";
        document.getElementById('3').className= "";
        document.getElementById('BGraf').style = "color:azure";

    }
}

mudaBt3 = function(){
    var classe = document.getElementById('3').className;
    if(classe == ''){
        document.getElementById('home').className= "";
        document.getElementById('Bhome').style = "color:azure";
        document.getElementById('2').className= "";
        document.getElementById('BLista').style = "color:azure";
        document.getElementById('3').className= "active";
        document.getElementById('BGraf').style = "color:black";

    }
}


function abreHome(){
    mudaHome();
    window.location.href="#!/home"

}