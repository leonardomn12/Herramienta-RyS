import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Mayo } from 'src/app/models/mayo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-crear-mayo',
  templateUrl: './crear-mayo.component.html',
  styleUrls: ['./crear-mayo.component.css']
})
export class CrearMayoComponent implements OnInit {

  mayoForm: FormGroup
  titulo = 'Crear registro'
  id: string

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, 
    private mayoService: AppServiceService, private aRouter: ActivatedRoute) {
      this.mayoForm = this.fb.group({
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
    console.log(this.mayoForm)

    const mayo: Mayo = {
      nombre_cliente: this.mayoForm.get('nombre_cliente').value,
      telefono_cliente: this.mayoForm.get('telefono_cliente').value,
      ultima_fecha_compra: this.mayoForm.get('ultima_fecha_compra').value,
      producto: this.mayoForm.get('producto').value,
      ultima_fecha_llamada: this.mayoForm.get('ultima_fecha_llamada').value,
      nombre_encargado: this.mayoForm.get('nombre_encargado').value,
      resultado: this.mayoForm.get('resultado').value,
      comentarios: this.mayoForm.get('comentarios').value
    }

    if(this.id != null){
      //Editar

      this.mayoService.editProductMayo(this.id, mayo).subscribe(data =>{
        this.toastr.success('El producto se actualizó con éxito!', 'Producto editado!');
        this.router.navigateByUrl("/ventas-mayo");
      }, error =>{
        console.log(error)
        this.mayoForm.reset()
      })

    } else {
      //Agregar
      console.log(mayo)
      this.mayoService.createRegistroMayo(mayo).subscribe(data =>{
      this.toastr.success('El producto se agregó con éxito!', 'Producto agregado!');
      this.router.navigateByUrl("/ventas-mayo");
    }, error=>{
      console.log(error)
      this.mayoForm.reset()
    })
    }
  }


  Editar(){
    if(this.id != null) {
      this.titulo = 'Editar Registro';
      this.mayoService.getRegistroMayo(this.id).subscribe(data =>{
        this.mayoForm.setValue({
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
