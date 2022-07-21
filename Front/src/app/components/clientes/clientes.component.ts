import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listClientes: Cliente [] = []

  constructor(private clienteService: AppServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }


  obtenerClientes(){
    this.clienteService.getVentasClientes().subscribe(data =>{
      console.log(data)
      this.listClientes = data
    }, error =>{
      console.log(error)
    })
  }


  eliminarCliente(id: any){
    this.clienteService.deleteVentasClientes(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con éxito', 'Registro Eliminado');
      this.obtenerClientes();
    }, error =>{
      console.log(error);
    })
  }
}
