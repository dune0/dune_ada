class Alumno extends Persona {
	constructor(nombre, apellido, fecha,dni, legajo){
		super(nombre, apellido,fecha,dni);
		this._legajo = legajo;
		this._colegio;
		this._materias = []; //arreglo de objetos materia
	}
	set legajo(value){
		this._legajo = value;
	}
	get legajo(){
		return this._legajo;
	}

	addMateria(materia){
		this._materias.push(materia);
	}

// calcular el promedio gral del alumno
//return numero

calcularPromedio(){
	let largo = this._materias.lenght;
	let total = 0;
        
	for(var i=0; i<largo; i++){
		total+= this._materias[i].calcularPromedio();
	}

   let promedio = total/largo;
   return promedio;
	    
  }

} // fin de alumno