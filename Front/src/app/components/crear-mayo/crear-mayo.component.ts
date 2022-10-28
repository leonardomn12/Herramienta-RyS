import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calls } from 'src/app/models/calls';
import { Mayo } from 'src/app/models/mayo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-mayo',
  templateUrl: './crear-mayo.component.html',
  styleUrls: ['./crear-mayo.component.css'],
})
export class CrearMayoComponent implements OnInit {
  mayoForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  calls = new Calls();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private mayoService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.mayoForm = this.fb.group({
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
    console.log(this.mayoForm);

    const mayo: Mayo = {
      fecha_actual: this.mayoForm.get('fecha_actual').value,
      nombre_cliente: this.mayoForm.get('nombre_cliente').value,
      telefono_cliente: this.mayoForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.mayoForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.mayoForm.get('valor_compra').value,
      frecuencia_compra: this.mayoForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.mayoForm.get('fecha_actual').value,
          this.mayoForm.get('frecuencia_compra').value
        ),
      nombre_encargado: this.mayoForm.get('nombre_encargado').value,
      resultado: this.mayoForm.get('resultado').value,
      comentarios: this.mayoForm.get('comentarios').value,
      status: this.calls.getCallStatus(
        this.calls.calcularFechaFutura(
          this.mayoForm.get('fecha_actual').value,
          this.mayoForm.get('frecuencia_compra').value
        )
      ),
    };

    if (this.id != null) {
      //Editar

      this.mayoService.editProductMayo(this.id, mayo).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-mayo');
        },
        (error) => {
          console.log(error);
          this.mayoForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(mayo);
      this.mayoService.createRegistroMayo(mayo).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-mayo');
        },
        (error) => {
          console.log(error);
          this.mayoForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.mayoService.getRegistroMayo(this.id).subscribe((data) => {
        this.mayoForm.setValue({
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
