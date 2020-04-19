import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss'],
})
export class CaloriesComponent implements OnInit {
  @ViewChild('slider', {static: false}) slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    slidesPerView: 3,
  };
  sliders: ICaloryFood[] = [
    {
      name: 'Protein',
      progress: 40,
      fact: 700,
      type: 'protein'
    },
    {
      name: 'Carbs',
      progress: 40,
      fact: 700,
      type: 'carbs'
    },
    {
      name: 'Saturates',
      progress: 40,
      fact: 700,
      type: 'saturates'
    },
    {
      name: 'Sugar',
      progress: 40,
      fact: 700,
      type: 'sugar'
    },
  ];
  
  constructor() { }

  ngOnInit() {}

}

export interface ICaloryFood {
  name: string;
  progress: number;
  fact: number;
  type: 'protein' | 'carbs' | 'saturates' | 'sugar'
  
}
