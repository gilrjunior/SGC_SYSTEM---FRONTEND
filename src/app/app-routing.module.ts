import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeyListComponent } from './modules/keys/components/key-list/key-list.component';
import { KeyRegisterComponent } from './modules/keys/components/key-register/key-register.component';
import { KeyUpdateComponent } from './modules/keys/components/key-update/key-update.component';
import { KeyRemoveComponent } from './modules/keys/components/key-remove/key-remove.component';

const routes: Routes = [
  {path: "keys/list" ,component: KeyListComponent, title: "Lista de Chaves"},
  {path: "keys/register", component: KeyRegisterComponent, title: "Registro de Chaves"},
  {path: "keys/update", component: KeyUpdateComponent, title: "Atualizar Chave"},
  {path: "keys/remove", component: KeyRemoveComponent, title: "Remover Chave"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
