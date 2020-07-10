import {Component, Input, OnInit} from '@angular/core';
import {ISlideInfo} from '../../../pages/get-started/get-started.page';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNews implements OnInit {
  @Input() folder: string = 'offers';

  @Input() article: ISlideInfo = {
    imgSrc: '/assets/images/news.png',
    title: 'This is news',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
  };
  isNeedReadMore: boolean = false;
  @Input() imgHeight: number = 192;

  constructor() { }

  ngOnInit() {
  }

}
