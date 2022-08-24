import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AppServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onRegister(form):void{
    this.authService.registrar(form.value).subscribe(res=>{
      this.toastr.success('Usuario registrado con éxito!', 'Registro exitoso');
      this.router.navigateByUrl('/login')
    }, error=>{
      this.toastr.error('El usuario ya existe','Usuario existente')
      console.log(error);
    })
  }

}
