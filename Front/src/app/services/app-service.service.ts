import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Abril } from '../models/abril';
import { Agosto } from '../models/agosto';
import { Cliente } from '../models/cliente';
import { Diciembre } from '../models/diciembre';
import { Enero } from '../models/enero';
import { Febrero } from '../models/febrero';
import { Julio } from '../models/julio';
import { Junio } from '../models/junio';
import { JwtResponse } from '../models/jwt-response';
import { Marzo } from '../models/marzo';
import { Mayo } from '../models/mayo';
import { Noviembre } from '../models/noviembre';
import { Octubre } from '../models/octubre';
import { Septiembre } from '../models/septiembre';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  url: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) {}
  
  //Autenticación

  registrar(user: User): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.url}/registro`, user).pipe(tap(
      (res: JwtResponse)=>{
        if(res){
          //Guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }

  login(user: User): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.url}/login`, user).pipe(tap(
      (res: JwtResponse)=>{
        if(res){
          //Guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void{
    localStorage.setItem("ACCESS_TOKEN", token)
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  //Enero

  getVentasEnero(): Observable<any>{
    return this.httpClient.get(this.url + "/api/enero/")
  }

  deleteVentasEnero(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/enero/" + id )
  }

  createRegistroEnero(enero: Enero){
    return this.httpClient.post(this.url + "/api/enero/", enero)
  }

  getRegistroEnero(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/enero/" + id)
  }

  editProductEnero(id: string, enero: Enero): Observable<any>{
    return this.httpClient.put(this.url + "/api/enero/" + id, enero)
  }

  // Febrero

  getVentasFebrero(): Observable<any>{
    return this.httpClient.get(this.url + "/api/febrero/")
  }

  deleteVentasFebrero(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/febrero/" + id )
  }

  createRegistroFebrero(febrero: Febrero){
    return this.httpClient.post(this.url + "/api/febrero/", febrero)
  }

  getRegistroFebrero(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/febrero/" + id)
  }

  editProductFebrero(id: string, febrero: Febrero): Observable<any>{
    return this.httpClient.put(this.url + "/api/febrero/" + id, febrero)
  }

  // Marzo

  getVentasMarzo(): Observable<any>{
    return this.httpClient.get(this.url + "/api/marzo/")
  }

  deleteVentasMarzo(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/marzo/" + id )
  }

  createRegistroMarzo(marzo: Marzo){
    return this.httpClient.post(this.url + "/api/marzo/", marzo)
  }

  getRegistroMarzo(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/marzo/" + id)
  }

  editProductMarzo(id: string, marzo: Marzo): Observable<any>{
    return this.httpClient.put(this.url + "/api/marzo/" + id, marzo)
  }

  // Abril

  getVentasAbril(): Observable<any>{
    return this.httpClient.get(this.url + "/api/abril/")
  }

  deleteVentasAbril(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/abril/" + id )
  }

  createRegistroAbril(abril: Abril){
    return this.httpClient.post(this.url + "/api/abril/", abril)
  }

  getRegistroAbril(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/abril/" + id)
  }

  editProductAbril(id: string, abril: Abril): Observable<any>{
    return this.httpClient.put(this.url + "/api/abril/" + id, abril)
  }

  // Mayo

  getVentasMayo(): Observable<any>{
    return this.httpClient.get(this.url + "/api/mayo/")
  }

  deleteVentasMayo(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/mayo/" + id )
  }

  createRegistroMayo(mayo: Mayo){
    return this.httpClient.post(this.url + "/api/mayo/", mayo)
  }

  getRegistroMayo(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/mayo/" + id)
  }

  editProductMayo(id: string, mayo: Mayo): Observable<any>{
    return this.httpClient.put(this.url + "/api/mayo/" + id, mayo)
  }

  // Junio

  getVentasJunio(): Observable<any>{
    return this.httpClient.get(this.url + "/api/junio/")
  }

  deleteVentasJunio(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/junio/" + id )
  }

  createRegistroJunio(junio: Junio){
    return this.httpClient.post(this.url + "/api/junio/", junio)
  }

  getRegistroJunio(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/junio/" + id)
  }

  editProductJunio(id: string, junio: Junio): Observable<any>{
    return this.httpClient.put(this.url + "/api/junio/" + id, junio)
  }

  // Julio

  getVentasJulio(): Observable<any>{
    return this.httpClient.get(this.url + "/api/julio/")
  }

  deleteVentasJulio(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/julio/" + id )
  }

  createRegistroJulio(julio: Julio){
    return this.httpClient.post(this.url + "/api/julio/", julio)
  }

  getRegistroJulio(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/julio/" + id)
  }

  editProductJulio(id: string, julio: Julio): Observable<any>{
    return this.httpClient.put(this.url + "/api/julio/" + id, julio)
  }

  // Agosto

  getVentasAgosto(): Observable<any>{
    return this.httpClient.get(this.url + "/api/agosto/")
  }

  deleteVentasAgosto(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/agosto/" + id )
  }

  createRegistroAgosto(agosto: Agosto){
    return this.httpClient.post(this.url + "/api/agosto/", agosto)
  }

  getRegistroAgosto(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/agosto/" + id)
  }

  editProductAgosto(id: string, agosto: Agosto): Observable<any>{
    return this.httpClient.put(this.url + "/api/agosto/" + id, agosto)
  }

  // Septiembre

  getVentasSeptiembre(): Observable<any>{
    return this.httpClient.get(this.url + "/api/septiembre/")
  }

  deleteVentasSeptiembre(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/septiembre/" + id )
  }

  createRegistroSeptiembre(septiembre: Septiembre){
    return this.httpClient.post(this.url + "/api/septiembre/", septiembre)
  }

  getRegistroSeptiembre(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/septiembre/" + id)
  }

  editProductSeptiembre(id: string, septiembre: Septiembre): Observable<any>{
    return this.httpClient.put(this.url + "/api/septiembre/" + id, septiembre)
  }

  // Octubre

  getVentasOctubre(): Observable<any>{
    return this.httpClient.get(this.url + "/api/octubre/")
  }

  deleteVentasOctubre(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/octubre/" + id )
  }

  createRegistroOctubre(octubre: Octubre){
    return this.httpClient.post(this.url + "/api/octubre/", octubre)
  }

  getRegistroOctubre(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/octubre/" + id)
  }

  editProductOctubre(id: string, octubre: Octubre): Observable<any>{
    return this.httpClient.put(this.url + "/api/octubre/" + id, octubre)
  }

  // Noviembre

  getVentasNoviembre(): Observable<any>{
    return this.httpClient.get(this.url + "/api/noviembre/")
  }

  deleteVentasNoviembre(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/noviembre/" + id )
  }

  createRegistroNoviembre(noviembre: Noviembre){
    return this.httpClient.post(this.url + "/api/noviembre/", noviembre)
  }

  getRegistroNoviembre(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/noviembre/" + id)
  }

  editProductNoviembre(id: string, noviembre: Noviembre): Observable<any>{
    return this.httpClient.put(this.url + "/api/noviembre/" + id, noviembre)
  }

  // Diciembre

  getVentasDiciembre(): Observable<any>{
    return this.httpClient.get(this.url + "/api/diciembre/")
  }

  deleteVentasDiciembre(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/diciembre/" + id )
  }

  createRegistroDiciembre(diciembre: Diciembre){
    return this.httpClient.post(this.url + "/api/diciembre/", diciembre)
  }

  getRegistroDiciembre(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/diciembre/" + id)
  }

  editProductDiciembre(id: string, diciembre: Diciembre): Observable<any>{
    return this.httpClient.put(this.url + "/api/diciembre/" + id, diciembre)
  }

  // Clientes

  getVentasClientes(): Observable<any>{
    return this.httpClient.get(this.url + "/api/clientes/")
  }

  deleteVentasClientes(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/api/clientes/" + id )
  }

  createRegistroClientes(cliente: Cliente){
    return this.httpClient.post(this.url + "/api/clientes/", cliente)
  }

  getRegistroClientes(id: string): Observable<any>{
    return this.httpClient.get(this.url + "/api/clientes/" + id)
  }

  editProductClientes(id: string, cliente: Cliente): Observable<any>{
    return this.httpClient.put(this.url + "/api/clientes/" + id, cliente)
  }
}
