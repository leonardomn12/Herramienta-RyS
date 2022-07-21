import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Marzo } from 'src/app/models/marzo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-marzo',
  templateUrl: './marzo.component.html',
  styleUrls: ['./marzo.component.css']
})
export class MarzoComponent implements OnInit {

  listMarzo: Marzo [] = [];

  constructor(private marzoService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.marzoService.getVentasMarzo().subscribe(data =>{
      console.log(data)
      this.listMarzo = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.marzoService.deleteVentasMarzo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
