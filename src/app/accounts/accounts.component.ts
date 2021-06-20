import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public accountDataList: any = [];
  public accountName: string;
  public accountAddress: string;
  public pan: string;
  public applyGST: Boolean = false;
  public accountGSTNo: Number;
  public accountNumber: Number;
  public bankName: string;
  public bankBranch: string;
  public ifscCode: string;
  public currentAccountName: string;
  public currentAccountNumber: string;
  public currentBankName: string;
  public currentBankBranch: string;
  public currentIfscCode: string;
  public showErrorMessage: Boolean = false;
  closeResult = '';

  constructor(private accountService: AccountService, private modalService: NgbModal) { }

  open(content, data) {
    this.currentAccountName = data.accountName;
    this.currentAccountNumber = 'Account Number: ' + data.bankDetails.accountNumber;
    this.currentBankName = 'Bank Name: ' + data.bankDetails.bankName;
    this.currentBankBranch = 'Branch Name: ' + data.bankDetails.bankBranch;
    this.currentIfscCode = 'IFSC Code: ' + data.bankDetails.ifscCode;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.accountDataList = this.accountService.returnAccountData();
  }

  validateFormData() {
    if (this.accountName && this.accountAddress && this.pan && this.accountNumber && this.bankName
      && this.bankBranch && this.ifscCode) {
      if (this.applyGST && !this.accountGSTNo) {
        return false;
      }
      return true;
    } else return false;
  }

  submitAccountData(userForm) {
    console.log(userForm)
    if (this.validateFormData()) {
      let accountData = {};
      accountData['accountName'] = this.accountName;
      accountData['accountAddress'] = this.accountAddress;
      accountData['accountPAN'] = this.pan;
      accountData['accountGSTNo'] = this.accountGSTNo;
      accountData['bankDetails'] = {};
      accountData['bankDetails']['accountNumber'] = this.accountNumber;
      accountData['bankDetails']['bankName'] = this.bankName;
      accountData['bankDetails']['bankBranch'] = this.bankBranch;
      accountData['bankDetails']['ifscCode'] = this.ifscCode;
      this.accountDataList.push(accountData);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }


  }

}
