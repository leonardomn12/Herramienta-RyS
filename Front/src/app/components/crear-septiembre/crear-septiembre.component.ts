import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Calls } from 'src/app/models/calls';
import { Septiembre } from 'src/app/models/septiembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-septiembre',
  templateUrl: './crear-septiembre.component.html',
  styleUrls: ['./crear-septiembre.component.css'],
})
export class CrearSeptiembreComponent implements OnInit {
  septiembreForm: FormGroup;
  titulo = 'Crear registro';
  id: string;
  fecha_actual = new Date();
  calls = new Calls();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private septiembreService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.septiembreForm = this.fb.group({
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
    console.log(this.septiembreForm);

    const septiembre: Septiembre = {
      fecha_actual: this.fecha_actual,
      nombre_cliente: this.septiembreForm.get('nombre_cliente').value,
      telefono_cliente: this.septiembreForm.get('telefono_cliente').value,
      ultima_fecha_llamada: new Date(
        this.septiembreForm.get('ultima_fecha_llamada').value
      ),
      valor_compra: this.septiembreForm.get('valor_compra').value,
      frecuencia_compra: this.septiembreForm.get('frecuencia_compra').value,
      fecha_futura: this.calls
        .calcularFechaFutura(
          this.fecha_actual,
          this.septiembreForm.get('frecuencia_compra').value
        )
        .toLocaleDateString(),
      nombre_encargado: this.septiembreForm.get('nombre_encargado').value,
      resultado: this.septiembreForm.get('resultado').value,
      comentarios: this.septiembreForm.get('comentarios').value,
      status: this.calls.getCallStatus(
        this.fecha_actual,
        this.calls.calcularFechaFutura(
          this.fecha_actual,
          this.septiembreForm.get('frecuencia_compra').value
        )
      ),
    };

    if (this.id != null) {
      //Editar

      this.septiembreService.editProductSeptiembre(this.id, septiembre).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/ventas-septiembre');
        },
        (error) => {
          console.log(error);
          this.septiembreForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(septiembre);
      this.septiembreService.createRegistroSeptiembre(septiembre).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/ventas-septiembre');
        },
        (error) => {
          console.log(error);
          this.septiembreForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.septiembreService.getRegistroSeptiembre(this.id).subscribe((data) => {
        this.septiembreForm.setValue({
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
