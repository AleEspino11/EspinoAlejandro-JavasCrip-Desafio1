//Opciones de pago

let precio;
let resultado;
let formaDePago;
let opcionValida=0;


const calcular = (precio,forma) => {resultado = precio*forma;}

const calculoDeCuota = (cantidadDeCuotas) => {cuota = resultado/cantidadDeCuotas;}

precio = parseInt(prompt("Ingresa el precio del producto"));

formaDePago = parseInt(prompt(`Ingresa tu opción de pago  

Formas de Pago:
1- Efectivo (10% de descuento)
2- Tarjetas de Débito o Crédito en 1 pago
3- 3 cuotas con interés del 10% 
4- 6 cuotas con interés del 20% 
5- 12 cuotas con interés del 30%` 
));

while(opcionValida===0) {
    switch(formaDePago){
        case 1: {
            calcular(precio,0.9);
            alert(`El monto total a pagar en efectivo es de $${resultado}`);
            opcionValida=1;
            break;
        }
        case 2: {
            calcular(precio,1);
            alert(`El monto total a pagar en Con débito o crédito es de $${resultado} en 1 pago`);
            opcionValida=1;
            break;
        }
        case 3: {
            calcular(precio,1.1);
            calculoDeCuota(3);
            alert(`Plan de 3 cuotas: 
            El monto total a pagar es de $${resultado}.
            3 cuotas fijas de $${cuota}`);
            opcionValida=1;
            break;
        }
        case 4: {
            calcular(precio,1.2);
            calculoDeCuota(6);
            alert(`Plan de 6 cuotas: 
            El monto total a pagar es de $${resultado}.
            6 cuotas fijas de $${cuota}`);
            opcionValida=1;
            break;
        }
        case 5: {
            calcular(precio,1.3);
            calculoDeCuota(12);
            alert(`Plan de 12 cuotas: 
            El monto total a pagar $${resultado}.
            12 cuotas fijas de $${cuota}`);
            opcionValida=1;
            break;
        }
        default: {
            alert("Opción inválida");
        
    
        }
     formaDePago = parseInt(prompt(`Ingresa tu opción de pago  

     Formas de Pago:
     1- Efectivo (10% de descuento)
     2- Tarjetas de Débito o Crédito en 1 pago
     3- 3 cuotas con interés del 10% 
     4- 6 cuotas con interés del 20% 
     5- 12 cuotas con interés del 30%`));
    }
}