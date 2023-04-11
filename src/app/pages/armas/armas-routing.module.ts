import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmasPage } from './armas.page';

const routes: Routes = [
  {
    path: '',
    component: ArmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmasPageRoutingModule {}
