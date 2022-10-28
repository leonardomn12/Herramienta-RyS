export class Cliente {
  _id?: number;
  nombre_cliente: string;
  identificacion: string;
  direccion: string;
  telefono: string;
  ciudad: string;

  constructor(
    nombre_cliente: string,
    identificacion: string,
    direccion: string,
    telefono: string,
    ciudad: string
  ) {
    this.nombre_cliente = nombre_cliente;
    this.identificacion = identificacion;
    this.direccion = direccion;
    this.telefono = telefono;
    this.ciudad = ciudad;
  }
}
