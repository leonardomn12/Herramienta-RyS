import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calls } from 'src/app/models/calls';
import { Junio } from 'src/app/models/junio';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-junio',
  templateUrl: './crear-junio.component.html',
  styleUrls: ['./crear-junio.component.css'],
})
export class CrearJunioComponent implements OnInit {
  junioForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  calls = new Calls();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private junioService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.junioForm = this.fb.group({
      fecha_actual: ['', Validators.required],
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
    console.log(this.junioForm);

    const junio: Junio = {
      fecha_actual: this.junioForm.get('fecha_actual').value,
      nombre_cliente: this.junioForm.get('nombre_cliente').value,
      telefono_cliente: this.junioForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.junioForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.junioForm.get('valor_compra').value,
      frecuencia_compra: this.junioForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.junioForm.get('fecha_actual').value,
          this.junioForm.get('frecuencia_compra').value
        )
        .toLocaleDateString(),
      nombre_encargado: this.junioForm.get('nombre_encargado').value,
      resultado: this.junioForm.get('resultado').value,
      comentarios: this.junioForm.get('comentarios').value,
      status: this.calls.getCallStatus(
        this.calls.calcularFechaFutura(
          this.junioForm.get('fecha_actual').value,
          this.junioForm.get('frecuencia_compra').value
        )
      ),
    };

    if (this.id != null) {
      //Editar

      this.junioService.editProductJunio(this.id, junio).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-junio');
        },
        (error) => {
          console.log(error);
          this.junioForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(junio);
      this.junioService.createRegistroJunio(junio).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-junio');
        },
        (error) => {
          console.log(error);
          this.junioForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.junioService.getRegistroJunio(this.id).subscribe((data) => {
        this.junioForm.setValue({
          fecha_actual: data.fecha_actual,
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
