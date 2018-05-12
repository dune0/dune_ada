class Profesor extends Persona{

	constructor(){
		super(nombre, apellido, fecha, dni);
		this._sueldo;
	}

	set sueldo(value){
		this.sueldo = value;
	}

	get sueldo(){
		return this.sueldo;
	}
} // class profesor