import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFruet } from '../interfaces/fruet-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {
   constructor(private http: HttpClient) { }

  // getting the json moc
  getData() {
   return  this.http.get<IFruet[]>('/assets/moc.json');
  }
}
