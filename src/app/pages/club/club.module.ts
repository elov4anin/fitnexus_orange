import {NgModule} from '@angular/core';

import {ClubPageRoutingModule} from './club-routing.module';

import {ClubPage} from './club.page';
import {SharedModule} from '../../shared/shared.module';
import {ClubNewsComponent} from './club-news/club-news.component';
import {MonthFreeComponent} from './month-free/month-free.component';
import {SmallSliderComponent} from './small-slider/small-slider.component';

@NgModule({
    imports: [
        SharedModule,
        ClubPageRoutingModule
    ],
    declarations: [
        ClubPage,
        ClubNewsComponent,
        MonthFreeComponent,
        SmallSliderComponent
    ]
})
export class ClubPageModule {
}
