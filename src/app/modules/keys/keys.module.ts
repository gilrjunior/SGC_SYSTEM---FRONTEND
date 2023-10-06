import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { KeyListComponent } from './components/key-list/key-list.component';
import { KeyRegisterComponent } from './components/key-register/key-register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KeyListComponent,
    KeyRegisterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class KeysModule { }
