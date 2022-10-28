import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Mayo } from 'src/app/models/mayo';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-mayo',
  templateUrl: './mayo.component.html',
  styleUrls: ['./mayo.component.css']
})
export class MayoComponent implements OnInit {

  listMayo: Mayo [] = [];

  constructor(private mayoService: AppServiceService, private toastr: ToastrService, public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.mayoService.getVentasMayo().subscribe(data =>{
      console.log(data)
      this.listMayo = data
    }, error =>{
      console.log(error)
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
    this.mayoService.deleteVentasMayo(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerVentas();
    }, error =>{
      console.log(error);
    })
  }

}
