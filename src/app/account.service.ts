import { Injectable } from '@angular/core';
import { AccountData } from './account-data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private accountData: AccountData) { }
  
  returnAccountData() {
    return  this.accountData.data; 
  }
}