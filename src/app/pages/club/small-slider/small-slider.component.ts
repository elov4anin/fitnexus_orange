import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ISlideInfo} from '../../get-started/get-started.page';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-small-slider',
  templateUrl: './small-slider.component.html',
  styleUrls: ['./small-slider.component.scss'],
})
export class SmallSliderComponent implements OnInit {
  @Input() list: ISlideInfo[] = [];
  @Input() imgHeight: number = 96;
  @Input() slideMinWidth: number = 209;

  @ViewChild('slider', {static: false}) sliderRef: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    width: 209
  };
  constructor() { }

  ngOnInit() {}
  openSlide() {
    // this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.VIDEO_ITEM])
  }

}
