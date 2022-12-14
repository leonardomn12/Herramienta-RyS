import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Abril } from 'src/app/models/abril';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-abril',
  templateUrl: './crear-abril.component.html',
  styleUrls: ['./crear-abril.component.css']
})
export class CrearAbrilComponent implements OnInit {

  abrilForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private abrilService: AppServiceService, private aRouter: ActivatedRoute) {
      this.abrilForm = this.fb.group({
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
    console.log(this.abrilForm)

    const abril: Abril = {
      nombre_cliente: this.abrilForm.get('nombre_cliente').value,
      telefono_cliente: this.abrilForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.abrilForm.get('ultima_fecha_compra').value,
      producto: this.abrilForm.get('producto').value,
      ultima_fecha_llamada: this.abrilForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.abrilForm.get('nombre_encargado').value,
      resultado: this.abrilForm.get('resultado').value,
      comentarios: this.abrilForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.abrilService.editProductAbril(this.id, abril).subscribe(data =>{
        this.toastr.success('El producto se actualiz?? con ??xito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-abril");
      }, error =>{
        console.log(error)
        this.abrilForm.reset()
      })

    } else {
      //Agregar
      console.log(abril)
      this.abrilService.createRegistroAbril(abril).subscribe(data =>{
      this.toastr.success('El producto se agreg?? con ??xito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-abril");
    }, error=>{
      console.log(error)
      this.abrilForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.abrilService.getRegistroAbril(this.id).subscribe(data =>{
        this.abrilForm.setValue({
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
