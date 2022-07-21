import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Julio } from 'src/app/models/julio';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-julio',
  templateUrl: './crear-julio.component.html',
  styleUrls: ['./crear-julio.component.css']
})
export class CrearJulioComponent implements OnInit {

  julioForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private julioService: AppServiceService, private aRouter: ActivatedRoute) {
      this.julioForm = this.fb.group({
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
    console.log(this.julioForm)

    const julio: Julio = {
      nombre_cliente: this.julioForm.get('nombre_cliente').value,
      telefono_cliente: this.julioForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.julioForm.get('ultima_fecha_compra').value,
      producto: this.julioForm.get('producto').value,
      ultima_fecha_llamada: this.julioForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.julioForm.get('nombre_encargado').value,
      resultado: this.julioForm.get('resultado').value,
      comentarios: this.julioForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.julioService.editProductJulio(this.id, julio).subscribe(data =>{
        this.toastr.success('El producto se actualizó con éxito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-julio");
      }, error =>{
        console.log(error)
        this.julioForm.reset()
      })

    } else {
      //Agregar
      console.log(julio)
      this.julioService.createRegistroJulio(julio).subscribe(data =>{
      this.toastr.success('El producto se agregó con éxito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-julio");
    }, error=>{
      console.log(error)
      this.julioForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.julioService.getRegistroJulio(this.id).subscribe(data =>{
        this.julioForm.setValue({
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
