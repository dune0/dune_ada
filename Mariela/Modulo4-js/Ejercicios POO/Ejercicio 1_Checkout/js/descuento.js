/*
Ejercicio 1 - Crear una clase, que contenga las funcionalidades necesarias para poder utilizarla como auxiliar en un proceso de checkout.
- Calculo de descuentos
/*
Ejercicio 1 - Crear una clase, que contenga las funcionalidades necesarias para poder utilizarla como auxiliar en un proceso de checkout.
- Calculo de descuentos
- Cálculo de costo de financiación por compra en cuotas
- Cálculo de costo de envío (según distancia y tamaño de paquete), teniendo en cuenta:
- Hasta 10Kg y menos de 20km, envio gratuito
- Recargo cada 5kg adicionales: $35.00
- Recargo cada 5km adicionales: $15.00
*/

class checkout{	

	constructor(subtotal,descuento,compra, envio){

		this._subtotal = subtotal;
		this._descuento = descuento;
		this._compra = compra;
		this._envio = envio;
	}

	calcularDescuento(subtotal, descuento){
		let total = this._subtotal * descuento / 100;
	}
} // Fin de checkout