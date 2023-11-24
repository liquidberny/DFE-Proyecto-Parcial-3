import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';
import { Observable } from 'rxjs';

const API_PATH = 'https://65317c2e4d4c2e3f333d0fe2.mockapi.io/api/';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }


  getEventList(): Observable<Event[]> {
    const path = API_PATH + 'casas';

    return this.http.get<Event[]>(path);
  }
}
