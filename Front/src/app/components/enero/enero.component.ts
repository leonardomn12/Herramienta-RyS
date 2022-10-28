import { Component, OnInit } from '@angular/core';
import { Enero } from 'src/app/models/enero';
import {ToastrService} from 'ngx-toastr'
import { AppServiceService } from 'src/app/services/app-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-enero',
  templateUrl: './enero.component.html',
  styleUrls: ['./enero.component.css']
})
export class EneroComponent implements OnInit {

  listEnero: Enero [] = [];

  constructor(private eneroService: AppServiceService, private toastr: ToastrService, public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  mostrarDialogo(id:any): void {
    this.dialogo
      .open(ConfirmationDialogComponent, {
        data: `¿Desea eliminar el registro?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarVenta(id);
        } else {
          this.obtenerVentas();
        }
      });
  }

  obtenerVentas(){
    this.eneroService.getVentasEnero().subscribe(data =>{
      console.log(data)
      this.listEnero = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarVenta(id: any){
    this.eneroService.deleteVentasEnero(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }
}
