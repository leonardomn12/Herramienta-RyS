import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Agosto } from 'src/app/models/agosto';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-agosto',
  templateUrl: './agosto.component.html',
  styleUrls: ['./agosto.component.css']
})
export class AgostoComponent implements OnInit {

  listAgosto: Agosto [] = [];

  constructor(private agostoService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.agostoService.getVentasAgosto().subscribe(data =>{
      console.log(data)
      this.listAgosto = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.agostoService.deleteVentasAgosto(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }
}
