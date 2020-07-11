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
      title: "Mediteranian",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "Thai",
      imgSrc: "/assets/images/meals/48c0ea7231f90782ffc0845a2a92bce3@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "Mediteranian",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "Thai",
      imgSrc: "/assets/images/meals/48c0ea7231f90782ffc0845a2a92bce3@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },  {
      title: "Mediteranian",
      imgSrc: "/assets/images/meals/dd99d46a8c49b1eb61df5a12c23f7812@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
    {
      title: "Thai",
      imgSrc: "/assets/images/meals/48c0ea7231f90782ffc0845a2a92bce3@2x.png",
      text: "Full of healthy fats, fruits & veggies"
    },
  ];
  constructor(private _router: Router) { }

  ngOnInit() {}

  openSlide() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.VIDEO_ITEM])
  }

}
