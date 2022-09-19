import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Abril } from 'src/app/models/abril';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-abril',
  templateUrl: './crear-abril.component.html',
  styleUrls: ['./crear-abril.component.css'],
})
export class CrearAbrilComponent implements OnInit {
  abrilForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  fecha_actual = new Date().toLocaleDateString();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private abrilService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.abrilForm = this.fb.group({
      nombre_cliente: ['', Validators.required],
      telefono_cliente: ['', Validators.required],
      ultima_fecha_llamada: ['', Validators.required],
      valor_compra: ['', Validators.required],
      frecuencia_compra: ['', Validators.required],
      nombre_encargado: ['', Validators.required],
      resultado: ['', Validators.required],
      comentarios: ['', Validators.nullValidator],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Editar();
  }

  agregarRegistro() {
    console.log(this.abrilForm);

    const abril: Abril = {
      nombre_cliente: this.abrilForm.get('nombre_cliente').value,
      telefono_cliente: this.abrilForm.get('telefono_cliente').value,
      ultima_fecha_llamada: this.abrilForm.get('ultima_fecha_llamada').value,
      valor_compra: this.abrilForm.get('producto').value,
      frecuencia_compra: this.abrilForm.get('frecuencia_compra').value,
      fecha_futura: calcularFechaFutura(
        this.abrilForm.get('ultima_fecha_llamada').value,
        this.abrilForm.get('frecuencia_compra').value
      ),
      nombre_encargado: this.abrilForm.get('nombre_encargado').value,
      resultado: this.abrilForm.get('resultado').value,
      comentarios: this.abrilForm.get('comentarios').value,
    };

    if (this.id != null) {
      //Editar

      this.abrilService.editProductAbril(this.id, abril).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-abril');
        },
        (error) => {
          console.log(error);
          this.abrilForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(abril);
      this.abrilService.createRegistroAbril(abril).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-abril');
        },
        (error) => {
          console.log(error);
          this.abrilForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.abrilService.getRegistroAbril(this.id).subscribe((data) => {
        this.abrilForm.setValue({
          nombre_cliente: data.nombre_cliente,
          telefono_cliente: data.telefono_cliente,
          ultima_fecha_llamada: data.ultima_fecha_llamada,
          valor_compra: data.valor_compra,
          frecuencia_compra: data.frecuencia_compra,
          nombre_encargado: data.nombre_encargado,
          resultado: data.resultado,
          comentarios: data.comentarios,
        });
      });
    }
  }
}

function calcularFechaFutura(fecha_llamada: Date, frecuencia: number) {
  let frecuencia_compras = 12 / frecuencia;
  let compra_anual = Math.round(frecuencia_compras) * 30;
  const calculoFecha = 1000 * 60 * 60 * 24 * compra_anual;
  let proxima_compra = fecha_llamada.getTime() + calculoFecha;
  let fecha_futura = new Date(proxima_compra);
  return fecha_futura.toLocaleDateString();
}