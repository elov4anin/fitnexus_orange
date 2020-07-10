import {NgModule} from '@angular/core';

import {ArticlesPageRoutingModule} from './articles-routing.module';

import {ArticlesPage} from './articles.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ArticlesPageRoutingModule
    ],
    declarations: [ArticlesPage]
})
export class ArticlesPageModule {
}
