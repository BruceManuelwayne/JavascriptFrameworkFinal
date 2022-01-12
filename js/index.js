
var futuros = []
var pasados = []



$(document).ready(function () {

  async function start(){
    const response = await fetch('http://127.0.0.1:5500/info.json')
    const data = await response.json()
    const fecha = data.fechaActual



    listaTodosEventos = crearLista(data.eventos);
    // array de eventos pasados
    for(let i = 0; i < lista.length; i ++){
      if(lista[i].fecha <= fecha)
      pasados.push(lista[i])
    }
    // array de eventos futuros
    for(let i = 0; i < lista.length; i ++){
      if(lista[i].fecha >= fecha)
      futuros.push(lista[i])
    }
  
    mostrarEventos(futuros,'proximosEventos');
    mostrarEventos(pasados,'pasadosEventos');
  

  }

  start();
  //creo listas ordenada
  function crearLista(eventosLista){
    lista = eventosLista.sort(porFecha)

  }
  // funcion que ordena lista por fecha
  function porFecha(a,b){
    return new Date(a.fecha).valueOf() - new Date(b.fecha).valueOf();
  }

  function mostrarEventos(eventos,nombreDiv){
    

    for(let i = 0; i < 2; i++){
      var str = '<div class="flex-child white">'
      // str += '<> ID: '+ eventos[i].id + '</p>'+

      str += '<a href ="detalle.html?id='+ eventos[i].id +'" style="font-size: 30px; text-decoration: underline">'+ eventos[i].nombre + '</a>'+
      '<p style="color:#D8D8D8">'+ eventos[i].fecha +' - ' + eventos[i].lugar +'</p>' +
      '<p>'+ eventos[i].descripcion + '</p>'+
      // '<p> Lugar: ' + '</p>'+
      // '<p> Invitados: '+ eventos[i].invitados + '</p>'+
      '<p style="color:#00CCFF"> Precio: '+ eventos[i].precio + '</p>'+ '</div>'
      $('#'+nombreDiv).append(str)
    }
    
  }


});
