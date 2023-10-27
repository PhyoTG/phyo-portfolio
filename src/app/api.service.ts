import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://bww3s8wqz6.execute-api.us-east-1.amazonaws.com/v1';

  constructor(private http: HttpClient) { }

  sendMessage(body: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/message`, body);
  }
}
