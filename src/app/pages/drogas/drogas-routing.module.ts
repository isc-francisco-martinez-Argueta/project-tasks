import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrogasPage } from './drogas.page';

const routes: Routes = [
  {
    path: '',
    component: DrogasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrogasPageRoutingModule {}
