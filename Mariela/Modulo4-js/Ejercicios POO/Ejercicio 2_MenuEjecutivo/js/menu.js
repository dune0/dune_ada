class Menu{
    constructor(entrada, principal, postre, bebida){
        this._entrada = entrada;
        this._principal = principal;
        this._postre = postre;
        this._bebida = bebida;
        this._precio = 180;
    }
/*
+ Params entrada Obj
*/
    set entrada(value){
        this._entrada = value;
    }

    get entrada(){
        return this._entrada;
    }
} //Fin de Menu

