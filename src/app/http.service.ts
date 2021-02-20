import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(payload) {
    return this.http.post(this.url + '/login', payload);
  }

  getPatientInfo() {
    return this.http.get(this.url + '/getPatientHealthInfo');
  }
}
