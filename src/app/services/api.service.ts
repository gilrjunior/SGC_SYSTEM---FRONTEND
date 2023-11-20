import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ikey } from '../key/ikey';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }

  getKeys(){

    return this.http.get<Ikey[]>(`${environment.api}/keys/get`,{observe: 'response'})

  }

  registerKeys(key:Ikey){

    return this.http.post<Ikey[]>(`${environment.api}/keys/register`,key,{observe: 'response'})

  }

  searchKey(description: string){

    return this.http.get<Ikey[]>(`${environment.api}/keys/search/${description}`,{observe: 'response'})

  }

  updateKey(key){

    return this.http.post(`${environment.api}/keys/update`,key,{observe: 'response'})

  }

  removeKey(key){

    return this.http.post(`${environment.api}/keys/remove`,key,{observe: 'response'})

  }

}
