import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://q2oq8dhqyl.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  sendMessage(body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/v1/portfolio-lambda`, body);
  }
}
