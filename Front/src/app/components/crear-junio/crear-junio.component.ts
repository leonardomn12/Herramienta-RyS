import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Junio } from 'src/app/models/junio';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-junio',
  templateUrl: './crear-junio.component.html',
  styleUrls: ['./crear-junio.component.css']
})
export class CrearJunioComponent implements OnInit {

  junioForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private junioService: AppServiceService, private aRouter: ActivatedRoute) {
      this.junioForm = this.fb.group({
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
    console.log(this.junioForm)

    const junio: Junio = {
      nombre_cliente: this.junioForm.get('nombre_cliente').value,
      telefono_cliente: this.junioForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.junioForm.get('ultima_fecha_compra').value,
      producto: this.junioForm.get('producto').value,
      ultima_fecha_llamada: this.junioForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.junioForm.get('nombre_encargado').value,
      resultado: this.junioForm.get('resultado').value,
      comentarios: this.junioForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.junioService.editProductJunio(this.id, junio).subscribe(data =>{
        this.toastr.success('El producto se actualizó con éxito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-junio");
      }, error =>{
        console.log(error)
        this.junioForm.reset()
      })

    } else {
      //Agregar
      console.log(junio)
      this.junioService.createRegistroJunio(junio).subscribe(data =>{
      this.toastr.success('El producto se agregó con éxito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-junio");
    }, error=>{
      console.log(error)
      this.junioForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.junioService.getRegistroJunio(this.id).subscribe(data =>{
        this.junioForm.setValue({
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
