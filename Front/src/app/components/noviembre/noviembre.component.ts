import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Noviembre } from 'src/app/models/noviembre';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-noviembre',
  templateUrl: './noviembre.component.html',
  styleUrls: ['./noviembre.component.css']
})
export class NoviembreComponent implements OnInit {

  listNoviembre: Noviembre [] = [];

  constructor(private noviembreService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.noviembreService.getVentasNoviembre().subscribe(data =>{
      console.log(data)
      this.listNoviembre = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.noviembreService.deleteVentasNoviembre(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
