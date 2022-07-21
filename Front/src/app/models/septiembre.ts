export class Septiembre {
    _id?: number;
    nombre_cliente: string;
    telefono_cliente: number;
    ultima_fecha_compra: string;
    producto: string;
    ultima_fecha_llamada: string;
    nombre_encargado: string;
    resultado: string;
    comentarios: string;

    constructor(nombre_cliente: string, telefono_cliente: number, ultima_fecha_compra: string, producto: string,
        ultima_fecha_llamada: string, nombre_encargado: string, resultado: string, comentarios: string){
            this.nombre_cliente = nombre_cliente
            this.telefono_cliente = telefono_cliente
            this.ultima_fecha_compra = ultima_fecha_compra
            this.producto = producto
            this.ultima_fecha_llamada = ultima_fecha_llamada
            this.nombre_encargado = nombre_encargado
            this.resultado = resultado
            this.comentarios = comentarios
    }
}