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

    return this.http.get<Ikey[]>(`${environment.api}/keys`,{observe: 'response'})

  }

  insertKeys(key:Ikey){

    return this.http.post<Ikey[]>(`${environment.api}/keyregister`,key,{observe: 'response'})

  }

}
