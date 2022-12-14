import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Diciembre } from 'src/app/models/diciembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-diciembre',
  templateUrl: './crear-diciembre.component.html',
  styleUrls: ['./crear-diciembre.component.css']
})
export class CrearDiciembreComponent implements OnInit {

  diciembreForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private diciembreService: AppServiceService, private aRouter: ActivatedRoute) {
      this.diciembreForm = this.fb.group({
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
    console.log(this.diciembreForm)

    const diciembre: Diciembre = {
      nombre_cliente: this.diciembreForm.get('nombre_cliente').value,
      telefono_cliente: this.diciembreForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.diciembreForm.get('ultima_fecha_compra').value,
      producto: this.diciembreForm.get('producto').value,
      ultima_fecha_llamada: this.diciembreForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.diciembreForm.get('nombre_encargado').value,
      resultado: this.diciembreForm.get('resultado').value,
      comentarios: this.diciembreForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.diciembreService.editProductDiciembre(this.id, diciembre).subscribe(data =>{
        this.toastr.success('El producto se actualiz?? con ??xito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-diciembre");
      }, error =>{
        console.log(error)
        this.diciembreForm.reset()
      })

    } else {
      //Agregar
      console.log(diciembre)
      this.diciembreService.createRegistroDiciembre(diciembre).subscribe(data =>{
      this.toastr.success('El producto se agreg?? con ??xito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-diciembre");
    }, error=>{
      console.log(error)
      this.diciembreForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.diciembreService.getRegistroDiciembre(this.id).subscribe(data =>{
        this.diciembreForm.setValue({
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
