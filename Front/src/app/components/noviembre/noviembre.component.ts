import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Noviembre } from 'src/app/models/noviembre';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-noviembre',
  templateUrl: './noviembre.component.html',
  styleUrls: ['./noviembre.component.css']
})
export class NoviembreComponent implements OnInit {

  listNoviembre: Noviembre [] = [];
  page_size = 10;
  page_index = 1;
  pageSizeOption = [10, 25, 50, 100];

  constructor(private noviembreService: AppServiceService, private toastr: ToastrService, public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.noviembreService.getVentasNoviembre().subscribe(data =>{
      this.listNoviembre = data
    }, error =>{
      this.toastr.error(
        'Error al obtener los datos',
        'Error'
      );
    })
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

  eliminarVenta(id: any){
    this.noviembreService.deleteVentasNoviembre(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      this.toastr.error('Error al eliminar el registro', 'Error');
    })
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_index = e.pageIndex + 1;
  }

}
