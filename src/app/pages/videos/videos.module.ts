import {NgModule} from '@angular/core';

import {VideosPageRoutingModule} from './videos-routing.module';

import {VideosPage} from './videos.page';
import {SharedModule} from '../../shared/shared.module';
import {NewSlidesComponent} from './components/new-slides/new-slides.component';
import {FavoriteSlidesComponent} from './components/favorite-slides/favorite-slides.component';
import {CategoryListComponent} from './components/category-list/category-list.component';

@NgModule({
    imports: [
        SharedModule,
        VideosPageRoutingModule
    ],
    declarations: [
        VideosPage,
        NewSlidesComponent,
        FavoriteSlidesComponent,
        CategoryListComponent,
    ]
})
export class VideosPageModule {
}
