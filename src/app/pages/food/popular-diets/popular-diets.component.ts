import { Component, OnInit } from '@angular/core';
import {ISlideInfo} from '../../get-started/get-started.page';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../shared/enums/pages.enum';

@Component({
  selector: 'app-popular-diets',
  templateUrl: './popular-diets.component.html',
  styleUrls: ['./popular-diets.component.scss'],
})
export class PopularDietsComponent implements OnInit {

  list: ISlideInfo[] = [
    {
      title: "Ketogenic",
      imgSrc: "/assets/images/meals/9b2c5dbad5ed4c89aacad46a2e971558@2x.png",
      text: 'Full of healthy fats'
    },
    {
      title: "Gluten Free",
      imgSrc: "/assets/images/meals/6fb34b23098e7b0542a90779073b6b56@2x.png",
      text: 'Full of healthy fats'
    },
    {
      title: "Vegan",
      imgSrc: "/assets/images/meals/ef219cf430ae1130c6c15c6353dc906f@2x.png",
      text: 'Full of healthy fats'
    },
    {
      title: "Vegetarian",
      imgSrc: "/assets/images/meals/01e6b0cf58e585a6f198fdb50210873c@2x.png",
      text: 'Full of healthy fats'
    },
    {
      title: "Paleo",
      imgSrc: "/assets/images/meals/ef7f570377d800c29195f22e47cf4bd5@2x.png",
      text: 'Full of healthy fats'
    },
    {
      title: "Whole 30",
      imgSrc: "/assets/images/meals/da7c693d4a45afdc434f18c30a0ca6d6@2x.png",
      text: 'Full of healthy fats'
    },
  ];

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  redirectTo() {
    // this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY])
  }

}
