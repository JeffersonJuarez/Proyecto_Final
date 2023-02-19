  //Precio cotizacion:
//noprotect
var precio_base = 2000

//RECARGOS
//segun la edad del asegurado: 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
//si es casado:
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
//si tiene hijos:
var hijos_recargo = 0.2 // 20%
//
var recargo = 0
var recargo_total = 0
var precio_final = 0
var nuevaCotizacion = 0

let salir = ""
while (salir !== "salir"){

//datos del asegurado
var nombre = prompt("Ingrese su nombre y apellido, por favor")
alert ("A continuacion se le solicitara informacion adicional para crear su cotizacion")
var edadAsegurado
 = prompt("¿Cuantos años tiene? por favor, ingrese solamente números ")
if (edadAsegurado<18){alert("No califica para un seguro/cotizacion por ser menor de edad")
} 
else if (edadAsegurado>=18){parseInt(edadAsegurado)

// casado
var casado = prompt("¿Está casado/a actualmente? (SI/NO)")
if("SI" == casado.toUpperCase()){edadconyuge = prompt("¿Que edad tiene su esposo/a? Ingrese sólo números")
 edadConyugeEdad = parseInt (edadconyuge)
}
else { edadConyugeEdad=0
}

                            
                            
//hijos
var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)")
if("SI" == hijos.toUpperCase()){
  numerohijos = prompt("¿Cuántos hijos tiene? Por favor, ingrese sólo números")
} else if ("NO"){
  numerohijos=0
}
numerohijos= parseInt(numerohijos)

//RECARGOS
//asegurado:
var recargoAsegurado = 0
if(edadAsegurado>=18 && edadAsegurado<25){
recargoAsegurado = precio_base * edad_18
} 
else if(edadAsegurado>=25 && edadAsegurado<50) {
recargoAsegurado= precio_base *  edad_25
} 
else if (edadAsegurado>=50) {
recargoAsegurado = precio_base * edad_50
}
// "SI" casado:
var recargoCasado = 0
if(edadConyugeEdad>=18 && edadConyugeEdad<25){
recargoCasado = precio_base * casado_18
} 
else if(edadConyugeEdad>=25 && edadConyugeEdad<50){
recargoCasado= precio_base *  casado_25
} 
else if (edadConyugeEdad>=50) {
recargoCasado = precio_base * casado_50
}
// "SI" hijos:
var recargohijos = (numerohijos*precio_base*hijos_recargo)
  
//cargo precio final
var recargo_total= recargoAsegurado+ recargoCasado+ recargohijos
var precio_final = precio_base + recargoAsegurado + recargoCasado +recargohijos

//Resultado, alertas finales:
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El costo final por el seguro sera de: "+precio_final)

salir =prompt ("Ingrese la palabra 'salir' para finalizar el programa")
if (salir==="salir"){
  
  alert("Gracias por utilizar nuestros servicios")
}}
}

    



