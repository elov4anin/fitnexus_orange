import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFeedPage } from './news-feed.page';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedPage
  },
  {
    path: ':id',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsFeedPageRoutingModule {}
