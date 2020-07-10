import { Component, OnInit } from '@angular/core';
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';
import {ISlideInfo} from '../../../get-started/get-started.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  titlePage: string = PagesEnum2NamesMapping.ARTICLES;
  news: ISlideInfo[] = [
    {
      title: "We tested at-home workouts during quarantine",
      imgSrc: "/assets/images/articles/2c27323ee9e26ef4c00bdd8c8869a20e@2x.png",
      text: 'Why High-Low Training is the best way to get the most value out of your self-isolation'
    },
    {
      title: "Why Nutrition is the most Important Part of Fitness",
      imgSrc: "/assets/images/articles/e54b9841801f2e6c7bd060721ca60555@2x.png",
      text: 'The trend is now to focus on healthy food intake as a primary fitness goal'
    },
    {
      title: "We tested at-home workouts during quarantine",
      imgSrc: "/assets/images/articles/2c27323ee9e26ef4c00bdd8c8869a20e@2x.png",
      text: 'Why High-Low Training is the best way to get the most value out of your self-isolation'
    },
    {
      title: "Why Nutrition is the most Important Part of Fitness",
      imgSrc: "/assets/images/articles/e54b9841801f2e6c7bd060721ca60555@2x.png",
      text: 'The trend is now to focus on healthy food intake as a primary fitness goal'
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
