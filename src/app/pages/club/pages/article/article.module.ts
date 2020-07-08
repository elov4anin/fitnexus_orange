import { NgModule } from '@angular/core';

import { ArticlePageRoutingModule } from './article-routing.module';

import { ArticlePage } from './article.page';
import {SharedModule} from '../../../../shared/shared.module';
import {ListCommentsComponent} from './list-comments/list-comments.component';

@NgModule({
  imports: [
    SharedModule,
    ArticlePageRoutingModule
  ],
  declarations: [ArticlePage, ListCommentsComponent]
})
export class ArticlePageModule {}
