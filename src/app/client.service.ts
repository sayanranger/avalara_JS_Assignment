import { Injectable } from '@angular/core';
import { ClientData } from '././client-data'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private clientData: ClientData) { }

  returnClientData() {
    return  this.clientData.data; 
  }
}
