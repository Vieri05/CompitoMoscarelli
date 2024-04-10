import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  registra(item:any) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/register', item);
  }

  accedi(item:any) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/login', item);
  }
}
