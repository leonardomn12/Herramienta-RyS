import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Junio } from 'src/app/models/junio';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-junio',
  templateUrl: './junio.component.html',
  styleUrls: ['./junio.component.css']
})
export class JunioComponent implements OnInit {

  listJunio: Junio [] = [];

  constructor(private junioService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.junioService.getVentasJunio().subscribe(data =>{
      console.log(data)
      this.listJunio = data
    }, error =>{
      console.log(error)
    })
  }

  eliminarVenta(id: any){
    this.junioService.deleteVentasJunio(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }
}
