import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferralPage } from './referral-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferalPageRoutingModule {}
