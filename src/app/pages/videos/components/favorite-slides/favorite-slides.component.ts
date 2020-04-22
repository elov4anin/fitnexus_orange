import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ISlideInfo} from '../../../get-started/get-started.page';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-favorite-slides',
  templateUrl: './favorite-slides.component.html',
  styleUrls: ['./favorite-slides.component.scss'],
})
export class FavoriteSlidesComponent implements OnInit {
  @ViewChild('slider', {static: false}) sliderRef: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    slidesPerView: 1,
    width: 196,
    spaceBetween: 16,
  };
  sliders: ISlideInfo[] = [
    {
      title: "easy yoga routine",
      imgSrc: "/assets/images/new_video@2x.png"
    },
    {
      title: "easy yoga routine 2",
      imgSrc: "/assets/images/new_video@2x.png"
    },
    {
      title: "easy yoga routine 3",
      imgSrc: "/assets/images/new_video@2x.png"
    },
    {
      title: "easy yoga routine 4",
      imgSrc: "/assets/images/new_video@2x.png"
    },
    {
      title: "easy yoga routine 5",
      imgSrc: "/assets/images/new_video@2x.png"
    },
    {
      title: "easy yoga routine 6",
      imgSrc: "/assets/images/new_video@2x.png"
    }
  ];
  constructor(private _router: Router) { }

  ngOnInit() {}

  redirectTo() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.CHALLENGES, 1]);
  }
}
