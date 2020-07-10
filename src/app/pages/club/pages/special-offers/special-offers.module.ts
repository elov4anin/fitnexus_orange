import {NgModule} from '@angular/core';

import {SpecialOffersPageRoutingModule} from './special-offers-routing.module';

import {SpecialOffersPage} from './special-offers.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        SpecialOffersPageRoutingModule
    ],
    declarations: [SpecialOffersPage]
})
export class SpecialOffersPageModule {
}
