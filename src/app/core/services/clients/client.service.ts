import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from '../../models/clients/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public client!: Client;
  private clientSubject = new Subject<Client>();
  public clientState = this.clientSubject.asObservable();

  constructor() { }

  save(client: Client) {
    this.client = client;
  }
}
