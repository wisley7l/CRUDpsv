
appA.controller('TelaGraficos',TelaGraficos);

function TelaGraficos($scope,$http,localStorageService,$mdDialog,$timeout,$interval){
    mudaBt3();

  //carregaBD($interval,$timeout,$http,$scope);
    ordenarPessoas(people);

     var opPie = {
      chart: {
                color: ['#0000FF','#FF00FF'],
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.values;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                

            }
    };
var opBarra = {
        chart: {
            color: ['#9900FF'],
            type: 'discreteBarChart',
            height: 300,
            margin: {
                top: 20,
                right: 20,
                bottom: 100,
                left: 60
            },
            x: function (d) { return d.label; },
            y: function (d) { return d.value; },
            showValues: true,
            valueFormat: function (d) {
                return d3.format('')(d);
            },
            duration: 500,
            xAxis: {
                rotateLabels : -30,
                axisLabel: 'Nomes'
            },
            yAxis: {
                axisLabel: 'Idades',
                axisLabelDistance: 1,
                tickFormat: function(d){
                        return d3.format(' ')(d)+' Anos';
                    }
            }
        }
    }
var opBarra2 = {
        chart: {
            color: ['#00FF11'],
            type: 'discreteBarChart',
            height: 300,
            margin: {
                top: 20,
                right: 20,
                bottom: 100,
                left: 55
            },
            x: function (d) { return d.label; },
            y: function (d) { return d.value; },
            showValues: true,
            valueFormat: function (d) {
                return d3.format('')(d);
            },
            duration: 50,
            xAxis: {
                rotateLabels : -30,
                axisLabel: 'Estados'
                
            },
            yAxis: {
                axisLabel: 'Pessoa(s)',
                axisLabelDistance: -10,
                tickFormat: function(d){
                        return d3.format(' ')(d) ;
                    }
            }
        }
    }

var opLine = {
    
			chart : {
				color : [ '#bbbbff', '#ff0000' ],
				duration : 1000,
				height : 300,
                 margin: {
                            top: 20,
                            right: 20,
                            bottom: 100,
                            left: 55    
                        },
				reduceXTicks : false,
				type : 'lineChart',
				useInteractiveGuideline: true,
				x : function(d) {
					return d.index;
				},
				xAxis : {
                    rotateLabels : -30,
					showMaxMin : false,
					tickFormat : function(d) {
						var label = series[0].values[d].label;
						return label;
					}
				},
				y : function(d) {
					return d.value;
				},
				yAxis : {
                    axisLabelDistance: -10,
					axisLabel : 'Idade',
					tickFormat : function(d) {
						return d3.format(' ')(d) ;
					}
				}
			}
}

	function gerarIdades() {
		var array = FIdade();
        console.log(array.dados);

		var dados = [];

		for (var contador = 0; contador < array.dados.length; contador++) {
            var atual = array.dados[contador];

			dados.push({
				index : contador,
                
				label : atual.label,
				value : atual.value
			});
		}

		return {
			key : 'Idade',
			values : dados
		};
	}

	function gerarMIdade() {
		var array = FIdade();
		var dados = [];

		for (var contador = 0; contador < array.dados.length; contador++) {
            var atual = array.dados[contador];

			dados.push({
				index : contador,
				label : atual.label,
				value : array.media,
			});
		}
		return {
			key : 'media',
			values : dados
		};
	}
var series = [ gerarIdades(),gerarMIdade() ];

//console.log(gerarMIdade());


 function FIdade() {
        ordenarPessoas(people);
        var media = 0;
        var dado = [];
        for (var cont = 0; cont < people.length; cont++) {
            media = media + parseInt(people[cont].info.idade_pessoa);
              if(people[cont].info.idade_pessoa == null){
                people[cont].info.idade_pessoa = 0;
            }
            var p = {
                label : people[cont].info.nom_pessoa,
                value: people[cont].info.idade_pessoa
            }
            dado.push(p);
        }
        media = media/people.length;
        return { 
                media : media, 
                dados : dado,
                }
    }

function geraGenero() {

        ordenarPessoas(people);
        var dados = [];
        var h=0, m=0;
        for (var cont = 0; cont <people.length; cont++) {
            if (people[cont].sexo == 'Masculino') {
                h++;
            }
            else {
                m++;
            }          
        }
        
        var homem = {
            key: 'Homem',
            values: (h/people.length)*100
        }
        var mulher = {
            key: 'Mulher',
            values: (m/people.length)*100
        }
        dados = [homem, mulher];

        return dados;        
    }


 function mediaIdade() {
        ordenarPessoas(people);
        var media = 0;
        var dado = [];
        for (var cont = 0; cont < people.length; cont++) {
            media = media + parseInt(people[cont].info.idade_pessoa);
            var p = {
                label : people[cont].info.nom_pessoa,
                value: people[cont].info.idade_pessoa
            }
            dado.push(p);
        }
        media = media/people.length;
        return [{key: 'Gráfico de Idades ',values:dado}]
    }
 
function geraCidades(){
    ordenarPessoas(people);
var dado =[];
var id = 11;

function buscaUFid(id){
    for(var cont =0 ; cont< states.length;cont++){
        if(states[cont].estados.id_estado == id){
            return states[cont].estados.uf_estado;
        }

    }
}

var uf = buscaUFid(id);
console.log(uf);
console.log(city);

for(var cont =0;cont < states.length;cont++){
    var c ={
        label : states[cont].estados.uf_estado,
        value : 0,
    }
    
        dado.push(c);
    }
    
    
//}

function buscaPosLabel(label){
    for(var cont = 0;cont < dado.length;cont++){
        
        if(dado[cont].label == label){
            return cont;
        }
    }
}// fim da function 
console.log(people);
for(var cont =0;cont<people.length;cont ++){
    var pos = buscaPosLabel(people[cont].info.uf_estado);
    dado[pos].value++;
}

return [{key: 'Gráfico de Cidades ',values:dado}]
}// fim da function geraCidades
     
return {
    opPizza : opPie,
    dadosPizza:geraGenero,
    opBarra:opBarra,
    dadosBarra: mediaIdade,
    gc:geraCidades,
    opBarra2:opBarra2,
    opLine:opLine,
    gl : series,    
}
    }