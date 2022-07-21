import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Julio } from 'src/app/models/julio';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-julio',
  templateUrl: './julio.component.html',
  styleUrls: ['./julio.component.css']
})
export class JulioComponent implements OnInit {

  listJulio: Julio [] = [];

  constructor(private julioService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.julioService.getVentasJulio().subscribe(data =>{
      console.log(data)
      this.listJulio = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.julioService.deleteVentasJulio(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
