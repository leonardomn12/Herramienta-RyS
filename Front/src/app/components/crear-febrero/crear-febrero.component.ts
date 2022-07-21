import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Febrero } from 'src/app/models/febrero';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-febrero',
  templateUrl: './crear-febrero.component.html',
  styleUrls: ['./crear-febrero.component.css']
})
export class CrearFebreroComponent implements OnInit {

  febreroForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private febreroService: AppServiceService, private aRouter: ActivatedRoute) {
      this.febreroForm = this.fb.group({
        nombre_cliente: ['', Validators.required],
        telefono_cliente: ['', Validators.required],
        ultima_fecha_compra: ['', Validators.required],
        producto: ['', Validators.required],
        ultima_fecha_llamada: ['', Validators.required],
        nombre_encargado: ['', Validators.required],
        resultado: ['', Validators.required],
        comentarios: ['', Validators.nullValidator]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.Editar();
  }


  agregarRegistro(){
    console.log(this.febreroForm)

    const febrero: Febrero = {
      nombre_cliente: this.febreroForm.get('nombre_cliente').value,
      telefono_cliente: this.febreroForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.febreroForm.get('ultima_fecha_compra').value,
      producto: this.febreroForm.get('producto').value,
      ultima_fecha_llamada: this.febreroForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.febreroForm.get('nombre_encargado').value,
      resultado: this.febreroForm.get('resultado').value,
      comentarios: this.febreroForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.febreroService.editProductFebrero(this.id, febrero).subscribe(data =>{
        this.toastr.success('El producto se actualizó con éxito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-febrero");
      }, error =>{
        console.log(error)
        this.febreroForm.reset()
      })

    } else {
      //Agregar
      console.log(febrero)
      this.febreroService.createRegistroFebrero(febrero).subscribe(data =>{
      this.toastr.success('El producto se agregó con éxito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-febrero");
    }, error=>{
      console.log(error)
      this.febreroForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.febreroService.getRegistroFebrero(this.id).subscribe(data =>{
        this.febreroForm.setValue({
          nombre_cliente: data.nombre_cliente,
          telefono_cliente: data.telefono_cliente,
          ultima_fecha_compra: data.ultima_fecha_compra,
          producto: data.producto,
          ultima_fecha_llamada: data.ultima_fecha_llamada,
          nombre_encargado: data.nombre_encargado,
          resultado: data.resultado,
          comentarios: data.comentarios
        })
      })
    }
  }

}
