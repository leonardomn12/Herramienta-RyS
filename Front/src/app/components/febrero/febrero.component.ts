import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Febrero } from 'src/app/models/febrero';
import { AppServiceService } from 'src/app/services/app-service.service';


@Component({
  selector: 'app-febrero',
  templateUrl: './febrero.component.html',
  styleUrls: ['./febrero.component.css']
})
export class FebreroComponent implements OnInit {

  listFebrero: Febrero [] = [];

  constructor(private febreroService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.febreroService.getVentasFebrero().subscribe(data =>{
      console.log(data)
      this.listFebrero = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.febreroService.deleteVentasFebrero(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
