import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Diciembre } from 'src/app/models/diciembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-diciembre',
  templateUrl: './diciembre.component.html',
  styleUrls: ['./diciembre.component.css']
})
export class DiciembreComponent implements OnInit {

  listDiciembre: Diciembre [] = [];

  constructor(private diciembreService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.diciembreService.getVentasDiciembre().subscribe(data =>{
      console.log(data)
      this.listDiciembre = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.diciembreService.deleteVentasDiciembre(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
