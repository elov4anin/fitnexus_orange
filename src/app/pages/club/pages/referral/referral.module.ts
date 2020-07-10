import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ReferalPageRoutingModule} from './referral-routing.module';

import {ReferralPage} from './referral-page.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ReferalPageRoutingModule
    ],
    declarations: [ReferralPage]
})
export class ReferalPageModule {
}
