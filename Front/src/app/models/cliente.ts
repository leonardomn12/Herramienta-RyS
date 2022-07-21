export class Cliente {
    _id?: number;
    nombre_cliente: string;
    nombre_encargado: string;
    correo: string;
    celular: number;

    constructor(nombre_cliente: string, nombre_encargado: string, correo: string, celular: number){
        this.nombre_cliente = nombre_cliente
        this.nombre_encargado = nombre_encargado
        this.correo = correo
        this.celular = celular
    }
}

