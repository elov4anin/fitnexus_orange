import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengesPage } from './challenges.page';
import {PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';

const routes: Routes = [
  {
    path: '',
    component: ChallengesPage
  },
  {
    path: PagesEnum2RoutingMapping.CHALLENGE,
    loadChildren: () => import('./challenge/challenge.module').then( m => m.ChallengePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}
