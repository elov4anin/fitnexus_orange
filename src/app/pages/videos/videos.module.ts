import {NgModule} from '@angular/core';

import {VideosPageRoutingModule} from './videos-routing.module';

import {VideosPage} from './videos.page';
import {SharedModule} from '../../shared/shared.module';
import {NewSlidesComponent} from './components/new-slides/new-slides.component';
import {FavoriteSlidesComponent} from './components/favorite-slides/favorite-slides.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {FocusListComponent} from './components/focus-list/focus-list.component';
import {DurationListComponent} from './components/duration-list/duration-list.component';
import {DifficultyListComponent} from './components/difficulty-list/difficulty-list.component';
import {FilterComponent} from './modals/filter/filter.component';

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
        FocusListComponent,
        DurationListComponent,
        DifficultyListComponent,
        FilterComponent
    ],
    entryComponents: [
        FilterComponent
    ]
})
export class VideosPageModule {
}
