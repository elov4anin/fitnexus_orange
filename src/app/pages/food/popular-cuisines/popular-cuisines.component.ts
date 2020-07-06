import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ISlideInfo} from '../../get-started/get-started.page';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../shared/enums/pages.enum';

@Component({
  selector: 'app-popular-cuisines',
  templateUrl: './popular-cuisines.component.html',
  styleUrls: ['./popular-cuisines.component.scss'],
})
export class PopularCuisinesComponent implements OnInit {
  @ViewChild('slider', {static: false}) sliderRef: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    width: 287
  };
  sliders: ISlideInfo[] = [
    {
      title: "easy yoga routine",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "easy yoga routine 2",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "easy yoga routine 3",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "easy yoga routine 4",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "easy yoga routine 5",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "easy yoga routine 6",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    }
  ];
  constructor(private _router: Router) { }

  ngOnInit() {}

  openSlide() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.VIDEO_ITEM])
  }

}
