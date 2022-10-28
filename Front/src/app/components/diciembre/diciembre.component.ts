import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Diciembre } from 'src/app/models/diciembre';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-diciembre',
  templateUrl: './diciembre.component.html',
  styleUrls: ['./diciembre.component.css'],
})
export class DiciembreComponent implements OnInit {
  listDiciembre: Diciembre[] = [];

  constructor(
    private diciembreService: AppServiceService,
    private toastr: ToastrService,
    public dialogo: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas() {
    this.diciembreService.getVentasDiciembre().subscribe(
      (data) => {
        console.log(data);
        this.listDiciembre = data;
      },
      (error) => {
        console.log(error);
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
    this.diciembreService.deleteVentasDiciembre(id).subscribe(
      (data) => {
        this.toastr.error(
          'El registro fue eliminado con éxito',
          'Registro Eliminado'
        );
        this.obtenerVentas();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
