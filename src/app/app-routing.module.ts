import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeyListComponent } from './modules/keys/components/key-list/key-list.component';
import { KeyRegisterComponent } from './modules/keys/components/key-register/key-register.component';

const routes: Routes = [
  {path: "keylist" ,component: KeyListComponent, title: "Lista de Chaves"},
  {path: "keyregister", component: KeyRegisterComponent, title: "Registro de Chaves"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
