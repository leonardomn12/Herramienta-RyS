export enum CallStatus {
  PENDIENTE = 'PENDIENTE',
  LLAMAR = 'LLAMAR AL CLIENTE',
  ATENDIDO = 'ATENDIDO',
}

export class Calls {
  calcularFechaFutura(fecha_llamada: string, frecuencia: number): Date {
    let fecha_actual = new Date(fecha_llamada);
    let frecuencia_compras = 12 / frecuencia;
    let compra_anual = Math.round(frecuencia_compras) * 30;
    const calculoFecha = 1000 * 60 * 60 * 24 * compra_anual;
    let proxima_compra = fecha_actual.getTime() + calculoFecha;
    let fecha_futura = new Date(proxima_compra);
    return fecha_futura;
  }

  getCallStatus(fecha_futura: Date) {
    // let fecha_actual = new Date(fecha);
    let today = new Date();
    if (today < fecha_futura) return CallStatus.PENDIENTE;
    if (today.toLocaleDateString() === fecha_futura.toLocaleDateString())
      return CallStatus.LLAMAR;
    return CallStatus.ATENDIDO;
  }
}
