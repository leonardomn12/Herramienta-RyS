import { Component, OnInit } from '@angular/core';
import { Enero } from 'src/app/models/enero';
import { ToastrService } from 'ngx-toastr';
import { AppServiceService } from 'src/app/services/app-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-enero',
  templateUrl: './enero.component.html',
  styleUrls: ['./enero.component.css'],
})
export class EneroComponent implements OnInit {
  listEnero: Enero[] = [];
  page_size = 10;
  page_index = 1;
  pageSizeOption = [10, 25, 50, 100];

  constructor(
    private eneroService: AppServiceService,
    private toastr: ToastrService,
    public dialogo: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerVentas();
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

  obtenerVentas() {
    this.eneroService.getVentasEnero().subscribe(
      (data) => {
        this.listEnero = data;
      },
      (error) => {
        this.toastr.error(
          'Error al obtener los datos',
          'Error'
        );
      }
    );
  }

  eliminarVenta(id: any) {
    this.eneroService.deleteVentasEnero(id).subscribe(
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

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_index = e.pageIndex + 1;
  }
}
