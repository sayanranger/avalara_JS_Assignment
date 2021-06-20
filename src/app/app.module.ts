import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientsComponent } from './clients/clients.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule } from '@angular/forms';
import { ClientService } from './client.service';
import { AccountService } from './account.service';
import { ClientData } from './client-data';
import { AccountData } from './account-data';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AccountsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    ClientService, 
    AccountService,
    ClientData,
    AccountData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
