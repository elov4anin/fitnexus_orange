import { Component, OnInit } from '@angular/core';
import {PagesEnum2NamesMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  title: string = PagesEnum2NamesMapping.ARTICLE;
  constructor() { }

  ngOnInit() {
  }

}
