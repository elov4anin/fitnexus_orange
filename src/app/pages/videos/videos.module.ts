import {NgModule} from '@angular/core';

import {VideosPageRoutingModule} from './videos-routing.module';

import {VideosPage} from './videos.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        VideosPageRoutingModule
    ],
    declarations: [VideosPage]
})
export class VideosPageModule {
}
