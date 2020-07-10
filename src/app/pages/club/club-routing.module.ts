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
  },
  {
    path: PagesEnum2RoutingMapping.SPECIAL_OFFERS,
    loadChildren: () => import('./pages/special-offers/special-offers.module').then( m => m.SpecialOffersPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.ARTICLES,
    loadChildren: () => import('./pages/articles/articles.module').then( m => m.ArticlesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubPageRoutingModule {}
