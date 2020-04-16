import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ISlideInfo} from '../../../get-started/get-started.page';

@Component({
  selector: 'app-new-slides',
  templateUrl: './new-slides.component.html',
  styleUrls: ['./new-slides.component.scss'],
})
export class NewSlidesComponent implements OnInit {
  @ViewChild('slider', {static: false}) sliderRef: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    slidesPerView: 1,
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
  constructor() { }

  ngOnInit() {}

}
