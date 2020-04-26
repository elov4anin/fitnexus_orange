import { Component, OnInit } from '@angular/core';
import {ISlideInfo} from '../../get-started/get-started.page';

@Component({
  selector: 'app-photos-slide',
  templateUrl: './photos-slide.component.html',
  styleUrls: ['./photos-slide.component.scss'],
})
export class PhotosSlideComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 24,
    width: 136,
    loop: true,
    centeredSlides: true,
  };
  sliders: ISlideInfo[] = [
    {
      title: "20 Jan 2019",
      imgSrc: "/assets/images/before-after-slides/slide1@2x.png"
    },
    {
      title: "20 Feb 2019",
      imgSrc: "/assets/images/before-after-slides/slide2@2x.png"
    },
    {
      title: "21 Feb 2019",
      imgSrc: "/assets/images/before-after-slides/slide1@2x.png"
    },
    {
      title: "20 Jan 2019",
      imgSrc: "/assets/images/before-after-slides/slide2@2x.png"
    },
    {
      title: "21 Feb 2019",
      imgSrc: "/assets/images/before-after-slides/slide1@2x.png"
    },
    {
      title: "20 Feb 2019",
      imgSrc: "/assets/images/before-after-slides/slide2@2x.png"
    },

  ];
  constructor() { }

  ngOnInit() {}

  openSlide() {

  }
}
