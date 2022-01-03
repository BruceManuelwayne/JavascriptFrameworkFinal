
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
    console.log(futuros); 
    console.log(pasados);
    mostrarEventos(futuros,'proximosEventos');
    mostrarEventos(pasados,'eventosPasados');
  

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
      str += '<p> ID:'+ eventos[i].id + '</p>'+
      '<p> Nombre: '+ eventos[i].nombre + '</p>'+
      '<p> Fecha: '+ eventos[i].fecha + '</p>'+
      '<p> Descripcion: '+ eventos[i].descripcion + '</p>'+
      '<p> Lugar :'+ eventos[i].lugar + '</p>'+
      '<p> Invitados: '+ eventos[i].invitados + '</p>'+
      '<p> Precio: '+ eventos[i].precio + '</p>'+ '</div>'
      $('#'+nombreDiv).append(str)
    }
    
  }


});
