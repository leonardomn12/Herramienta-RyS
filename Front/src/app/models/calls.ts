enum CallStatus {
  PENDIENTE = 'PENDIENTE',
  LLAMAR = 'LLAMAR AL CLIENTE',
  ATENDIDO = 'ATENDIDO',
}

export class Calls {
    calcularFechaFutura(fecha_llamada: Date, frecuencia: number): Date {
    let frecuencia_compras = 12 / frecuencia;
    let compra_anual = Math.round(frecuencia_compras) * 30;
    const calculoFecha = 1000 * 60 * 60 * 24 * compra_anual;
    let proxima_compra = fecha_llamada.getTime() + calculoFecha;
    let fecha_futura = new Date(proxima_compra);
    return fecha_futura;
  }

  getCallStatus(fecha_actual: Date, fecha_futura: Date) {
    if (fecha_actual < fecha_futura) return CallStatus.PENDIENTE;
    if (fecha_actual.toLocaleDateString() === fecha_futura.toLocaleDateString())
      return CallStatus.LLAMAR;
    return CallStatus.ATENDIDO;
  }
}
