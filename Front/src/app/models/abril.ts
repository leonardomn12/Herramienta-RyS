export class Abril {
    _id?: number;
    nombre_cliente: string;
    telefono_cliente: number;
    ultima_fecha_llamada: Date;
    valor_compra: number;
    frecuencia_compra: number;
    fecha_futura: string;
    nombre_encargado: string;
    resultado: string;
    comentarios: string;

    constructor(nombre_cliente: string, telefono_cliente: number, valor_compra: number, frecuencia_compra: number,
        ultima_fecha_llamada: Date, nombre_encargado: string, resultado: string, comentarios: string, fecha_futura: string){
            this.nombre_cliente = nombre_cliente
            this.telefono_cliente = telefono_cliente
            this.ultima_fecha_llamada = ultima_fecha_llamada
            this.valor_compra = valor_compra
            this.frecuencia_compra = frecuencia_compra
            this.fecha_futura = fecha_futura
            this.nombre_encargado = nombre_encargado
            this.resultado = resultado
            this.comentarios = comentarios
    }
}