import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubPage } from './club.page';
import {PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';

const routes: Routes = [
  {
    path: '',
    component: ClubPage
  },
  {
    path: PagesEnum2RoutingMapping.ARTICLE,
    loadChildren: () => import('./pages/article/article.module').then( m => m.ArticlePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubPageRoutingModule {}
