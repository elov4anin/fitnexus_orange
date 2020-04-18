import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPage } from './videos.page';
import {PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';

const routes: Routes = [
  {
    path: '',
    component: VideosPage
  },
  {
    path: PagesEnum2RoutingMapping.VIDEO_ITEM,
    loadChildren: () => import('./pages/video-item/video-item.module').then( m => m.VideoItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosPageRoutingModule {}
