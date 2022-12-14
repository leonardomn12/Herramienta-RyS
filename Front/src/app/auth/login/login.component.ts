import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AppServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onLogin(form): void{
    this.authService.login(form.value).subscribe(res=>{
      this.router.navigateByUrl('/inicio');
    }, error=>{
      this.toastr.error('Usuario y/o contraseña incorrectos', 'Inicio de sesión fallido')
      console.log(error);
    })
  }
}
