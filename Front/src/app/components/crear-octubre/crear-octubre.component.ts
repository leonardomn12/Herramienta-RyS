import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Octubre } from 'src/app/models/octubre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-octubre',
  templateUrl: './crear-octubre.component.html',
  styleUrls: ['./crear-octubre.component.css']
})
export class CrearOctubreComponent implements OnInit {

  octubreForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private octubreService: AppServiceService, private aRouter: ActivatedRoute) {
      this.octubreForm = this.fb.group({
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
    console.log(this.octubreForm)

    const octubre: Octubre = {
      nombre_cliente: this.octubreForm.get('nombre_cliente').value,
      telefono_cliente: this.octubreForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.octubreForm.get('ultima_fecha_compra').value,
      producto: this.octubreForm.get('producto').value,
      ultima_fecha_llamada: this.octubreForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.octubreForm.get('nombre_encargado').value,
      resultado: this.octubreForm.get('resultado').value,
      comentarios: this.octubreForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.octubreService.editProductOctubre(this.id, octubre).subscribe(data =>{
        this.toastr.success('El producto se actualizó con éxito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-octubre");
      }, error =>{
        console.log(error)
        this.octubreForm.reset()
      })

    } else {
      //Agregar
      console.log(octubre)
      this.octubreService.createRegistroOctubre(octubre).subscribe(data =>{
      this.toastr.success('El producto se agregó con éxito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-octubre");
    }, error=>{
      console.log(error)
      this.octubreForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.octubreService.getRegistroOctubre(this.id).subscribe(data =>{
        this.octubreForm.setValue({
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
