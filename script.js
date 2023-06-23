let productos = [
  { nombre: "Aqua", precio: 200 },
  { nombre: "Emoción", precio: 180 },
  { nombre: "Alegría", precio: 160 },
  { nombre: "Frescura", precio: 150 }
];
let vendedores = ["Juana", "Pedro"];
function ingresarVentas() {
  let ventas = [];
for (let i = 0; i < vendedores.length; i++) {
  alert(`Ingrese las ventas de ${vendedores[i]}:`);

  let vendedorVentas = {};

  for (let j = 0; j < productos.length; j++) {
    let cantidad = prompt(`Ingrese la cantidad vendida de ${productos[j].nombre}:`);
    
    if (isNaN(cantidad)) {
      alert("Error: debe ingresar un valor numérico.");
      return;
    }
    
    vendedorVentas[productos[j].nombre] = parseInt(cantidad);
  }

  ventas.push(vendedorVentas);
}

return ventas;
}

function calcularTotal(ventas) {
  let totales = [];

  for (let i = 0; i < ventas_capturadas.length; i++) {
    let vendedor = vendedores[i];
    let total = 0;

    for (let j = 0; j < productos.length; j++) {
      total += ventas_capturadas[i][productos[j].nombre] * productos[j].precio;
    }

    totales.push({ vendedor, total });
  }
  console.log("\nSuma total de dinero recolectada por cada vendedor:");
  for (let i = 0; i < totales.length; i++) {
    alert(`${totales[i].vendedor}: $${totales[i].total}`);
  }
  return totales;
}
function determinarEmpleadoDelMes(totales) {
  let maxTotal = 0;
  let empleadoDelMes = "";

  for (let i = 0; i < totales.length; i++) {
    let total = totales[i].total;

    if (total > maxTotal) {
      maxTotal = total;
      empleadoDelMes = totales[i].vendedor;
    } else if (total === maxTotal) {
      empleadoDelMes = "Empate";
    }
  }
  alert(`Empleado del mes: ${empleadoDelMes}`);
  return empleadoDelMes;
}

let ventas_capturadas = ingresarVentas();
let totales = calcularTotal(ventas_capturadas);
let empleadoDelMes = determinarEmpleadoDelMes(totales);

console.log("Cantidad de productos vendidos por cada vendedor:");
for (let i = 0; i < totales.length; i++) {
  console.log(`${totales[i].vendedor}:`);
  for (let j = 0; j < productos.length; j++) {
    console.log(`${productos[j].nombre}: ${ventas_capturadas[i][productos[j].nombre]}`);
  }
}










