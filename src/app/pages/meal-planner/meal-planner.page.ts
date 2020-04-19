import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";
import {ISlideInfo} from "../get-started/get-started.page";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.page.html',
  styleUrls: ['./meal-planner.page.scss'],
})
export class MealPlannerPage extends PageBaseComponent implements OnInit {

  pageTitle: string = PagesEnum2NamesMapping.MEAL_PLANNER;
  @ViewChild('slider', {static: false}) slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    slidesPerView: 1,
  };
  sliders: ISlideInfo[] = [
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    }
  ];
  constructor() {
    super();
  }

  ngOnInit() {
  }

  add() {
    this.sliders.push({
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    });
  }

  deleteSlide() {
  }
}
