import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Abril } from 'src/app/models/abril';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-abril',
  templateUrl: './abril.component.html',
  styleUrls: ['./abril.component.css']
})
export class AbrilComponent implements OnInit {

  listAbril: Abril [] = [];

  constructor(private abrilService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.abrilService.getVentasAbril().subscribe(data =>{
      console.log(data)
      this.listAbril = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.abrilService.deleteVentasAbril(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
