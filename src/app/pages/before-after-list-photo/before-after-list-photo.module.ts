import {NgModule} from '@angular/core';;

import {BeforeAfterListPhotoPageRoutingModule} from './before-after-list-photo-routing.module';

import {BeforeAfterListPhotoPage} from './before-after-list-photo.page';
import {SharedModule} from '../../shared/shared.module';
import {PhotosSlideComponent} from './photos-slide/photos-slide.component';

@NgModule({
    imports: [
        SharedModule,
        BeforeAfterListPhotoPageRoutingModule
    ],
    declarations: [BeforeAfterListPhotoPage, PhotosSlideComponent]
})
export class BeforeAfterListPhotoPageModule {
}
