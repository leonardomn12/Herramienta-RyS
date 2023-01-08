import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Septiembre } from 'src/app/models/septiembre';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-septiembre',
  templateUrl: './septiembre.component.html',
  styleUrls: ['./septiembre.component.css'],
})
export class SeptiembreComponent implements OnInit {
  listSeptiembre: Septiembre[] = [];
  page_size = 10;
  page_index = 1;
  pageSizeOption = [10, 25, 50, 100];

  constructor(
    private septiembreService: AppServiceService,
    private toastr: ToastrService,
    public dialogo: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas() {
    this.septiembreService.getVentasSeptiembre().subscribe(
      (data) => {
        this.listSeptiembre = data;
      },
      (error) => {
        this.toastr.error(
          'Error al obtener los datos',
          'Error'
        );
      }
    );
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

  eliminarVenta(id: any) {
    this.septiembreService.deleteVentasSeptiembre(id).subscribe(
      (data) => {
        this.toastr.error(
          'El registro fue eliminado con éxito',
          'Registro Eliminado'
        );
        this.obtenerVentas();
      },
      (error) => {
        this.toastr.error('Error al eliminar el registro', 'Error');
      }
    );
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_index = e.pageIndex + 1;
  }

}
