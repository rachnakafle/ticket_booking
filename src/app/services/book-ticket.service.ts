import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class BookTicketService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(baseUrl + '/api/ddl/get-no-of-tickets-to-buy-client-ddl');
  }
}