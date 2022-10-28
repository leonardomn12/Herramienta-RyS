import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agosto } from 'src/app/models/agosto';
import { Calls } from 'src/app/models/calls';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-agosto',
  templateUrl: './crear-agosto.component.html',
  styleUrls: ['./crear-agosto.component.css'],
})
export class CrearAgostoComponent implements OnInit {
  agostoForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  calls = new Calls();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private agostoService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.agostoForm = this.fb.group({
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
    console.log(this.agostoForm);

    const agosto: Agosto = {
      fecha_actual: this.agostoForm.get('fecha_actual').value,
      nombre_cliente: this.agostoForm.get('nombre_cliente').value,
      telefono_cliente: this.agostoForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.agostoForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.agostoForm.get('valor_compra').value,
      frecuencia_compra: this.agostoForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.agostoForm.get('fecha_actual').value,
          this.agostoForm.get('frecuencia_compra').value
        )
        .toLocaleDateString(),
      nombre_encargado: this.agostoForm.get('nombre_encargado').value,
      resultado: this.agostoForm.get('resultado').value,
      comentarios: this.agostoForm.get('comentarios').value,
      status: this.calls.getCallStatus(
        this.calls.calcularFechaFutura(
          this.agostoForm.get('fecha_actual').value,
          this.agostoForm.get('frecuencia_compra').value
        )
      ),
    };

    if (this.id != null) {
      //Editar

      this.agostoService.editProductAgosto(this.id, agosto).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-agosto');
        },
        (error) => {
          console.log(error);
          this.agostoForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(agosto);
      this.agostoService.createRegistroAgosto(agosto).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-agosto');
        },
        (error) => {
          console.log(error);
          this.agostoForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.agostoService.getRegistroAgosto(this.id).subscribe((data) => {
        this.agostoForm.setValue({
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
