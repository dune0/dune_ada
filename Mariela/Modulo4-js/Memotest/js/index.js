
let carta = $("#carta");
let cartas = [
    {
        name: "mulderuno",
        img: "img/mulder_uno.jpg",
        id: 1,
    },
    {
        name: "mulderdos",
        img: "img/mulder_dos.jpg",
        id: 2,
    },
    {
        name: "muldertres",
        img: "img/mulder_tres.jpg",
        id: 3,
    },
    {
        name: "scullyuno",
        img: "img/scully_uno.jpg",
        id: 4,
    },
    {
        name: "scullydos",
        img: "img/scully_dos.jpg",
        id: 5,
    },
    {
        name: "scullytres",
        img: "img/scully_tres.jpg",
        id: 6,
    },
];// termina el Array

for (var i = 0; i < cartas.length; i++){
    cartas[i].addEventListener("click", displayCard());
 };

 function displayCard(){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
 }