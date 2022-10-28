import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css'],
})
export class CrearClientesComponent implements OnInit {
  clientesForm: FormGroup;
  titulo = 'Crear registro';
  id: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private clienteService: AppServiceService,
    private aRouter: ActivatedRoute
  ) {
    this.clientesForm = this.fb.group({
      nombre_cliente: ['', Validators.required],
      identificacion: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Editar();
  }

  agregarRegistro() {
    console.log(this.clientesForm);

    const cliente: Cliente = {
      nombre_cliente: this.clientesForm.get('nombre_cliente').value,
      identificacion: this.clientesForm.get('identificacion').value,
      direccion: this.clientesForm.get('direccion').value,
      telefono: this.clientesForm.get('telefono').value,
      ciudad: this.clientesForm.get('ciudad').value,
    };

    if (this.id != null) {
      //Editar

      this.clienteService.editProductClientes(this.id, cliente).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se actualizó con éxito!',
            'Producto editado!'
          );
          this.router.navigateByUrl('/clientes');
        },
        (error) => {
          console.log(error);
          this.clientesForm.reset();
        }
      );
    } else {
      //Agregar
      console.log(cliente);
      this.clienteService.createRegistroClientes(cliente).subscribe(
        (data) => {
          this.toastr.success(
            'El producto se agregó con éxito!',
            'Producto agregado!'
          );
          this.router.navigateByUrl('/clientes');
        },
        (error) => {
          console.log(error);
          this.clientesForm.reset();
        }
      );
    }
  }

  Editar() {
    if (this.id != null) {
      this.titulo = 'Editar Registro';
      this.clienteService.getRegistroClientes(this.id).subscribe((data) => {
        this.clientesForm.setValue({
          nombre_cliente: data.nombre_cliente,
          identificacion: data.identificacion,
          direccion: data.direccion,
          telefono: data.telefono,
          ciudad: data.ciudad
        });
      });
    }
  }
}
