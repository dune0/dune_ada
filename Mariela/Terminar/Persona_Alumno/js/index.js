let alumno = new Alumno("Pepe", "Feliz", "12-07-1999","43509423", "1004")

console.log(Alumno);

let materia = new Materia("fisica", "lu y miercoles 19:00 a 22:00 hs");

materia.addNota(9);

console.log(Materia);

materia.addNota(8);

console.log(materia);

let promedioMateria = materia.calcularPromedio();

console.log(promedioMateria);

alumno.addMateria(materia);

let m2 = new Materia ("quimica", "mar yjue 19:00 a 22:00 hs");

m2.addNota(7);
m2.addNota(5);

alumno.addMateria(m2);

let promAlumno = alumno.calcularPromedio();

console.log("Promedio general: ",promAlumno);