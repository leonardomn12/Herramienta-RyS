import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calls } from 'src/app/models/calls';
import { Diciembre } from 'src/app/models/diciembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-diciembre',
  templateUrl: './crear-diciembre.component.html',
  styleUrls: ['./crear-diciembre.component.css'],
})
export class CrearDiciembreComponent implements OnInit {
  diciembreForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  calls = new Calls();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private diciembreService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.diciembreForm = this.fb.group({
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
    console.log(this.diciembreForm);

    const diciembre: Diciembre = {
      fecha_actual: this.diciembreForm.get('fecha_actual').value,
      nombre_cliente: this.diciembreForm.get('nombre_cliente').value,
      telefono_cliente: this.diciembreForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.diciembreForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.diciembreForm.get('valor_compra').value,
      frecuencia_compra: this.diciembreForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.diciembreForm.get('fecha_actual').value,
          this.diciembreForm.get('frecuencia_compra').value
        ),
      nombre_encargado: this.diciembreForm.get('nombre_encargado').value,
      resultado: this.diciembreForm.get('resultado').value,
      comentarios: this.diciembreForm.get('comentarios').value,
      status: this.calls.getCallStatus(
        this.calls.calcularFechaFutura(
          this.diciembreForm.get('fecha_actual').value,
          this.diciembreForm.get('frecuencia_compra').value
        )
      ),
    };

    if (this.id != null) {
      //Editar

      this.diciembreService.editProductDiciembre(this.id, diciembre).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-diciembre');
        },
        (error) => {
          console.log(error);
          this.diciembreForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(diciembre);
      this.diciembreService.createRegistroDiciembre(diciembre).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-diciembre');
        },
        (error) => {
          console.log(error);
          this.diciembreForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.diciembreService.getRegistroDiciembre(this.id).subscribe((data) => {
        this.diciembreForm.setValue({
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
