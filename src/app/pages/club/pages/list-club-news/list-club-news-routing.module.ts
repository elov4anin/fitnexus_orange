import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClubNewsPage } from './list-club-news.page';

const routes: Routes = [
  {
    path: '',
    component: ListClubNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListClubNewsPageRoutingModule {}
