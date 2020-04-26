import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeAfterListPhotoPage } from './before-after-list-photo.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeAfterListPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeAfterListPhotoPageRoutingModule {}
