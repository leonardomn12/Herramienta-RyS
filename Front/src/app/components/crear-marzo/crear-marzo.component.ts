import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calls } from 'src/app/models/calls';
import { Marzo } from 'src/app/models/marzo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-marzo',
  templateUrl: './crear-marzo.component.html',
  styleUrls: ['./crear-marzo.component.css'],
})
export class CrearMarzoComponent implements OnInit {
  marzoForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  calls = new Calls();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private marzoService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.marzoForm = this.fb.group({
      fecha_actual: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      telefono_cliente: ['', Validators.required],
      ultima_fecha_llamada: ['', Validators.required],
      valor_compra: ['', Validators.required],
      frecuencia_compra: ['', Validators.required],
      nombre_encargado: ['', Validators.required],
      resultado: ['', Validators.required],
      comentarios: ['', Validators.nullValidator],
      status: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Editar();
  }

  agregarRegistro() {
    const marzo: Marzo = {
      fecha_actual: this.marzoForm.get('fecha_actual').value,
      nombre_cliente: this.marzoForm.get('nombre_cliente').value,
      telefono_cliente: this.marzoForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.marzoForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.marzoForm.get('valor_compra').value,
      frecuencia_compra: this.marzoForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.marzoForm.get('fecha_actual').value,
          this.marzoForm.get('frecuencia_compra').value
        ),
      nombre_encargado: this.marzoForm.get('nombre_encargado').value,
      resultado: this.marzoForm.get('resultado').value,
      comentarios: this.marzoForm.get('comentarios').value,
      status: this.marzoForm.get('status').value
    };

    if (this.id != null) {
      //Editar

      this.marzoService.editProductMarzo(this.id, marzo).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-marzo');
        },
        (error) => {
          this.toastr.error('Error al editar el registro', 'Error');
          this.marzoForm.reset();
        }
      );
    } else {
      //Agregar
      this.marzoService.createRegistroMarzo(marzo).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-marzo');
        },
        (error) => {
          this.toastr.error('Error al crear el registro', 'Error');
          this.marzoForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.marzoService.getRegistroMarzo(this.id).subscribe((data) => {
        this.marzoForm.setValue({
          fecha_actual: data.fecha_actual,
          nombre_cliente: data.nombre_cliente,
          telefono_cliente: data.telefono_cliente,
          ultima_fecha_llamada: data.ultima_fecha_llamada,
          valor_compra: data.valor_compra,
          frecuencia_compra: data.frecuencia_compra,
          nombre_encargado: data.nombre_encargado,
          resultado: data.resultado,
          comentarios: data.comentarios,
          status: data.status
        });
      });
    }
  }
}
