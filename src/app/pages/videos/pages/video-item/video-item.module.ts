import {NgModule} from '@angular/core';

import {VideoItemPageRoutingModule} from './video-item-routing.module';

import {VideoItemPage} from './video-item.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        VideoItemPageRoutingModule
    ],
    declarations: [VideoItemPage]
})
export class VideoItemPageModule {
}
