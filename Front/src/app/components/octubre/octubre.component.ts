import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Octubre } from 'src/app/models/octubre';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-octubre',
  templateUrl: './octubre.component.html',
  styleUrls: ['./octubre.component.css'],
})
export class OctubreComponent implements OnInit {
  listOctubre: Octubre[] = [];
  page_size = 10;
  page_index = 1;
  pageSizeOption = [10, 25, 50, 100];

  constructor(
    private octubreService: AppServiceService,
    private toastr: ToastrService,
    public dialogo: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas() {
    this.octubreService.getVentasOctubre().subscribe(
      (data) => {
        this.listOctubre = data;
      },
      (error) => {
        this.toastr.error(
          'Error al obtener los datos',
          'Error'
        );
      }
    );
  }

  mostrarDialogo(id: any): void {
    this.dialogo
      .open(ConfirmationDialogComponent, {
        data: `¿Desea eliminar el registro?`,
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
    this.octubreService.deleteVentasOctubre(id).subscribe(
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
