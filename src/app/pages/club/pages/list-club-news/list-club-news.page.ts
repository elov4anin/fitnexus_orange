import { Component, OnInit } from '@angular/core';
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';
import {ISlideInfo} from '../../../get-started/get-started.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-club-news',
  templateUrl: './list-club-news.page.html',
  styleUrls: ['./list-club-news.page.scss'],
})
export class ListClubNewsPage implements OnInit {
  titlePage: string = PagesEnum2NamesMapping.SPECIAL_OFFERS;
  news: ISlideInfo[] = [
    {
      title: "Get Fit Friday: HIIT Workout",
      imgSrc: "/assets/images/articles/1c34d74f0fa58956605c31539e3d0c91@2x.png",
      text: 'HIIT stands for high-intensity interval training. It\'s a great way to burn calories...'
    },
    {
      title: "Trainers say this is common",
      imgSrc: "/assets/images/articles/2e08e0576c2a4ec22dded809a85f45f3@2x.png",
      text: 'Take on this challenging home workout. Gerren Liles hosts a fat-burning workout...'
    },
    {
      title: "Get Fit Friday: HIIT Workout",
      imgSrc: "/assets/images/articles/1c34d74f0fa58956605c31539e3d0c91@2x.png",
      text: 'HIIT stands for high-intensity interval training. It\'s a great way to burn calories...'
    },
    {
      title: "Trainers say this is common",
      imgSrc: "/assets/images/articles/2e08e0576c2a4ec22dded809a85f45f3@2x.png",
      text: 'Take on this challenging home workout. Gerren Liles hosts a fat-burning workout...'
    },
  ];

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  openNewsPage() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.CLUB, PagesEnum2RoutingMapping.ARTICLE])
  }

}
