let productos =["Aqua","emocion","alegria","frescura"];
let precios = [200,180,160,150];
let vendedores = ["Juana","Pedro"];
let continuar = true;

function elegirVendedor(){
let vendedorAseleccionar = document.getElementById('seleccionVendedor');

for (let i = 0; i < vendedores.length; i++) {
    let opciones = document.createElement('option');
    opciones.value = vendedores[i];
    opciones.text = vendedores[i];
    vendedorAseleccionar.appendChild(opciones);
  }

  let vendedorSeleccionado = document.getElementById('seleccionVendedor');
  let vendedorGuardado = document.getElementById('btn');
  
  vendedorGuardado.addEventListener('click', function() {
    let seleccion = vendedorSeleccionado.value;
    console.log('Opción seleccionada:', seleccion);
  });
}
function capturarVentas(){
  let productoAseleccionar = document.getElementById('seleccionProducto');

  for (let i = 0; i < productos.length; i++) {
      let opcionesP = document.createElement('option');
      opcionesP.value = productos[i];
      opcionesP.text = productos[i];
      productoAseleccionar.appendChild(opcionesP);
    }
  
    let productoSeleccionado = document.getElementById('seleccionProducto');
    let productoGuardado = document.getElementById('btnP');
    
    productoGuardado.addEventListener('click', function() {
      let seleccionP = productoSeleccionado.value;
      console.log('Opción seleccionada:', seleccionP);
    });      
   
}
function capturarCantidad() {
  
  let cantidad = document.getElementById("cantidadInput").value;
  
  let cantidadCapturada = parseFloat(cantidad);  
  
 console.log("Cantidad capturada:", cantidadCapturada);
} 



function continuarCaptura(opcion) {
  continuar = opcion;
  console.log("Opción seleccionada:", continuar);
}


  elegirVendedor();
  capturarVentas();
  capturarCantidad();
  continuarCaptura(); 








