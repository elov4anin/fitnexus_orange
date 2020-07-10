import {NgModule} from '@angular/core';

import {ListClubNewsPageRoutingModule} from './list-club-news-routing.module';

import {ListClubNewsPage} from './list-club-news.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ListClubNewsPageRoutingModule
    ],
    declarations: [ListClubNewsPage]
})
export class ListClubNewsPageModule {
}
