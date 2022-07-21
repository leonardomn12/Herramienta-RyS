import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Septiembre } from 'src/app/models/septiembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-septiembre',
  templateUrl: './septiembre.component.html',
  styleUrls: ['./septiembre.component.css']
})
export class SeptiembreComponent implements OnInit {

  listSeptiembre: Septiembre [] = [];

  constructor(private septiembreService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.septiembreService.getVentasSeptiembre().subscribe(data =>{
      console.log(data)
      this.listSeptiembre = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.septiembreService.deleteVentasSeptiembre(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
