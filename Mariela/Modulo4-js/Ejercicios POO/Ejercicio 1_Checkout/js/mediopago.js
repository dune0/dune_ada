class MedioPago{
	constructor(){}

	static calcularDescuento(monto, descuento){
		let valor = (monto*descuento)/100;
		return valor;
	}

	calcularRecargo(monto, nroCuotas){
		let recargo = 0;
		switch(nroCuotas){
			case 3: recargo = monto*1.05;
			break;
		}
		return recargo;
	}   
}