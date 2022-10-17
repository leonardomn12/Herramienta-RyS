import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calls } from 'src/app/models/calls';
import { Noviembre } from 'src/app/models/noviembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-noviembre',
  templateUrl: './crear-noviembre.component.html',
  styleUrls: ['./crear-noviembre.component.css'],
})
export class CrearNoviembreComponent implements OnInit {
  noviembreForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  fecha_actual = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private noviembreService: AppServiceService,
    private aRouter: ActivatedRoute,
    private calls: Calls
  ) {
    this.noviembreForm = this.fb.group({
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
    console.log(this.noviembreForm);

    const noviembre: Noviembre = {
      fecha_actual: this.fecha_actual,
      nombre_cliente: this.noviembreForm.get('nombre_cliente').value,
      telefono_cliente: this.noviembreForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.noviembreForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.noviembreForm.get('valor_compra').value,
      frecuencia_compra: this.noviembreForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.fecha_actual,
          this.noviembreForm.get('frecuencia_compra').value
        )
        .toLocaleDateString(),
      nombre_encargado: this.noviembreForm.get('nombre_encargado').value,
      resultado: this.noviembreForm.get('resultado').value,
      comentarios: this.noviembreForm.get('comentarios').value,
      status: this.calls.getCallStatus(
        this.fecha_actual,
        this.calls.calcularFechaFutura(
          this.fecha_actual,
          this.noviembreForm.get('frecuencia_compra').value
        )
      ),
    };

    if (this.id != null) {
      //Editar

      this.noviembreService.editProductNoviembre(this.id, noviembre).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-noviembre');
        },
        (error) => {
          console.log(error);
          this.noviembreForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(noviembre);
      this.noviembreService.createRegistroNoviembre(noviembre).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-noviembre');
        },
        (error) => {
          console.log(error);
          this.noviembreForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.noviembreService.getRegistroNoviembre(this.id).subscribe((data) => {
        this.noviembreForm.setValue({
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
