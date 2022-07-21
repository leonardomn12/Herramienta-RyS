import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AbrilComponent } from './components/abril/abril.component';
import { AgostoComponent } from './components/agosto/agosto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CrearAbrilComponent } from './components/crear-abril/crear-abril.component';
import { CrearAgostoComponent } from './components/crear-agosto/crear-agosto.component';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
import { CrearDiciembreComponent } from './components/crear-diciembre/crear-diciembre.component';
import { CrearEneroComponent } from './components/crear-enero/crear-enero.component';
import { CrearFebreroComponent } from './components/crear-febrero/crear-febrero.component';
import { CrearJulioComponent } from './components/crear-julio/crear-julio.component';
import { CrearJunioComponent } from './components/crear-junio/crear-junio.component';
import { CrearMarzoComponent } from './components/crear-marzo/crear-marzo.component';
import { CrearMayoComponent } from './components/crear-mayo/crear-mayo.component';
import { CrearNoviembreComponent } from './components/crear-noviembre/crear-noviembre.component';
import { CrearOctubreComponent } from './components/crear-octubre/crear-octubre.component';
import { CrearSeptiembreComponent } from './components/crear-septiembre/crear-septiembre.component';
import { DiciembreComponent } from './components/diciembre/diciembre.component';
import { EneroComponent } from './components/enero/enero.component';
import { FebreroComponent } from './components/febrero/febrero.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JulioComponent } from './components/julio/julio.component';
import { JunioComponent } from './components/junio/junio.component';
import { MarzoComponent } from './components/marzo/marzo.component';
import { MayoComponent } from './components/mayo/mayo.component';
import { NoviembreComponent } from './components/noviembre/noviembre.component';
import { OctubreComponent } from './components/octubre/octubre.component';
import { SeptiembreComponent } from './components/septiembre/septiembre.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'ventas-enero', component: EneroComponent},
  {path: 'ventas-febrero', component: FebreroComponent},
  {path: 'ventas-marzo', component: MarzoComponent},
  {path: 'ventas-abril', component: AbrilComponent},
  {path: 'ventas-mayo', component: MayoComponent},
  {path: 'ventas-junio', component: JunioComponent},
  {path: 'ventas-julio', component: JulioComponent},
  {path: 'ventas-agosto', component: AgostoComponent},
  {path: 'ventas-septiembre', component: SeptiembreComponent},
  {path: 'ventas-octubre', component: OctubreComponent},
  {path: 'ventas-noviembre', component: NoviembreComponent},
  {path: 'ventas-diciembre', component: DiciembreComponent},
  {path: 'crear-registro', component: CrearEneroComponent},
  {path: 'editar-registro/:id', component: CrearEneroComponent},
  {path: 'crear-febrero', component: CrearFebreroComponent},
  {path: 'editar-febrero/:id', component: CrearFebreroComponent},
  {path: 'crear-marzo', component: CrearMarzoComponent},
  {path: 'editar-marzo/:id', component: CrearMarzoComponent},
  {path: 'crear-abril', component: CrearAbrilComponent},
  {path: 'editar-abril/:id', component: CrearAbrilComponent},
  {path: 'crear-mayo', component: CrearMayoComponent},
  {path: 'editar-mayo/:id', component: CrearMayoComponent},
  {path: 'crear-junio', component: CrearJunioComponent},
  {path: 'editar-junio/:id', component: CrearJunioComponent},
  {path: 'crear-julio', component: CrearJulioComponent},
  {path: 'editar-julio/:id', component: CrearJulioComponent},
  {path: 'crear-agosto', component: CrearAgostoComponent},
  {path: 'editar-agosto/:id', component: CrearAgostoComponent},
  {path: 'crear-septiembre', component: CrearSeptiembreComponent},
  {path: 'editar-septiembre/:id', component: CrearSeptiembreComponent},
  {path: 'crear-octubre', component: CrearOctubreComponent},
  {path: 'editar-octubre/:id', component: CrearOctubreComponent},
  {path: 'crear-noviembre', component: CrearNoviembreComponent},
  {path: 'editar-noviembre/:id', component: CrearNoviembreComponent},
  {path: 'crear-diciembre', component: CrearDiciembreComponent},
  {path: 'editar-diciembre/:id', component: CrearDiciembreComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'crear-cliente', component: CrearClientesComponent},
  {path: 'editar-cliente/:id', component: CrearClientesComponent},
  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
