import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Enero } from 'src/app/models/enero';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-enero',
  templateUrl: './crear-enero.component.html',
  styleUrls: ['./crear-enero.component.css']
})
export class CrearEneroComponent implements OnInit {

  eneroForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private eneroService: AppServiceService, private aRouter: ActivatedRoute) {
      this.eneroForm = this.fb.group({
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
    console.log(this.eneroForm)

    const enero: Enero = {
      nombre_cliente: this.eneroForm.get('nombre_cliente').value,
      telefono_cliente: this.eneroForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.eneroForm.get('ultima_fecha_compra').value,
      producto: this.eneroForm.get('producto').value,
      ultima_fecha_llamada: this.eneroForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.eneroForm.get('nombre_encargado').value,
      resultado: this.eneroForm.get('resultado').value,
      comentarios: this.eneroForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.eneroService.editProductEnero(this.id, enero).subscribe(data =>{
        this.toastr.success('El producto se actualiz?? con ??xito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-enero");
      }, error =>{
        console.log(error)
        this.eneroForm.reset()
      })

    } else {
      //Agregar
      console.log(enero)
      this.eneroService.createRegistroEnero(enero).subscribe(data =>{
      this.toastr.success('El producto se agreg?? con ??xito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-enero");
    }, error=>{
      console.log(error)
      this.eneroForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.eneroService.getRegistroEnero(this.id).subscribe(data =>{
        this.eneroForm.setValue({
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
