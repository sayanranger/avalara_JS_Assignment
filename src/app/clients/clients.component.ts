import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public applyGST: Boolean = false;
  public clientName: string;
  public clientAddress: string;
  public clientGSTNo: Number;
  public clientDataList: any = [];
  public showErrorMessage: Boolean = false;

  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.clientDataList = this.clientService.returnClientData();
  }

  validateClientData() {
    if (this.clientName && this.clientAddress) {
      if (this.applyGST && !this.clientGSTNo) {
        return false;
      }
      return true;
    } else return false;
  }

  submitClientData() {
    if (this.validateClientData()) {
      let clientData = {};
      clientData['clientName'] = this.clientName;
      clientData['clientAddress'] = this.clientAddress;
      if (this.clientGSTNo) {
        clientData['clientGSTNo'] = this.clientGSTNo;
      }
      this.clientDataList.push(clientData);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }

}
