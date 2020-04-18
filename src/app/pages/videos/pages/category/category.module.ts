import {NgModule} from '@angular/core';
import {CategoryPageRoutingModule} from './category-routing.module';

import {CategoryPage} from './category.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CategoryPageRoutingModule
    ],
    declarations: [CategoryPage]
})
export class CategoryPageModule {
}
