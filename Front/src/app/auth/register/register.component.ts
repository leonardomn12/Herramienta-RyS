import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AppServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form):void{
    this.authService.registrar(form.value).subscribe(res=>{
      this.router.navigateByUrl('/login')
    })
  }

}
