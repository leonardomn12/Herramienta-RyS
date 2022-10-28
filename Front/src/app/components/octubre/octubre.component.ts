import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
        console.log(data);
        this.listOctubre = data;
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
    this.octubreService.deleteVentasOctubre(id).subscribe(
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
