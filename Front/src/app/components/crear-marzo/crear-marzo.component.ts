import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marzo } from 'src/app/models/marzo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-marzo',
  templateUrl: './crear-marzo.component.html',
  styleUrls: ['./crear-marzo.component.css']
})
export class CrearMarzoComponent implements OnInit {

  marzoForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private marzoService: AppServiceService, private aRouter: ActivatedRoute) {
      this.marzoForm = this.fb.group({
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
    console.log(this.marzoForm)

    const marzo: Marzo = {
      nombre_cliente: this.marzoForm.get('nombre_cliente').value,
      telefono_cliente: this.marzoForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.marzoForm.get('ultima_fecha_compra').value,
      producto: this.marzoForm.get('producto').value,
      ultima_fecha_llamada: this.marzoForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.marzoForm.get('nombre_encargado').value,
      resultado: this.marzoForm.get('resultado').value,
      comentarios: this.marzoForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.marzoService.editProductMarzo(this.id, marzo).subscribe(data =>{
        this.toastr.success('El producto se actualizó con éxito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-marzo");
      }, error =>{
        console.log(error)
        this.marzoForm.reset()
      })

    } else {
      //Agregar
      console.log(marzo)
      this.marzoService.createRegistroMarzo(marzo).subscribe(data =>{
      this.toastr.success('El producto se agregó con éxito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-marzo");
    }, error=>{
      console.log(error)
      this.marzoForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.marzoService.getRegistroMarzo(this.id).subscribe(data =>{
        this.marzoForm.setValue({
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
