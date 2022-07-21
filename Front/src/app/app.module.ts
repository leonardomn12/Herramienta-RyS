import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { EneroComponent } from './components/enero/enero.component';
import { ToastrModule } from 'ngx-toastr';
import { CrearEneroComponent } from './components/crear-enero/crear-enero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
import { FebreroComponent } from './components/febrero/febrero.component';
import { MarzoComponent } from './components/marzo/marzo.component';
import { AbrilComponent } from './components/abril/abril.component';
import { MayoComponent } from './components/mayo/mayo.component';
import { JunioComponent } from './components/junio/junio.component';
import { JulioComponent } from './components/julio/julio.component';
import { AgostoComponent } from './components/agosto/agosto.component';
import { SeptiembreComponent } from './components/septiembre/septiembre.component';
import { OctubreComponent } from './components/octubre/octubre.component';
import { NoviembreComponent } from './components/noviembre/noviembre.component';
import { DiciembreComponent } from './components/diciembre/diciembre.component';
import { CrearFebreroComponent } from './components/crear-febrero/crear-febrero.component';
import { CrearMarzoComponent } from './components/crear-marzo/crear-marzo.component';
import { CrearAbrilComponent } from './components/crear-abril/crear-abril.component';
import { CrearMayoComponent } from './components/crear-mayo/crear-mayo.component';
import { CrearJunioComponent } from './components/crear-junio/crear-junio.component';
import { CrearJulioComponent } from './components/crear-julio/crear-julio.component';
import { CrearAgostoComponent } from './components/crear-agosto/crear-agosto.component';
import { CrearSeptiembreComponent } from './components/crear-septiembre/crear-septiembre.component';
import { CrearOctubreComponent } from './components/crear-octubre/crear-octubre.component';
import { CrearNoviembreComponent } from './components/crear-noviembre/crear-noviembre.component';
import { CrearDiciembreComponent } from './components/crear-diciembre/crear-diciembre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EneroComponent,
    CrearEneroComponent,
    NavbarComponent,
    InicioComponent,
    ClientesComponent,
    CrearClientesComponent,
    FebreroComponent,
    MarzoComponent,
    AbrilComponent,
    MayoComponent,
    JunioComponent,
    JulioComponent,
    AgostoComponent,
    SeptiembreComponent,
    OctubreComponent,
    NoviembreComponent,
    DiciembreComponent,
    CrearFebreroComponent,
    CrearMarzoComponent,
    CrearAbrilComponent,
    CrearMayoComponent,
    CrearJunioComponent,
    CrearJulioComponent,
    CrearAgostoComponent,
    CrearSeptiembreComponent,
    CrearOctubreComponent,
    CrearNoviembreComponent,
    CrearDiciembreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
