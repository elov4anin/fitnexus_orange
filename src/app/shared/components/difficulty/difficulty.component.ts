import {Component, Input, OnInit} from '@angular/core';
import {DifficultyEnum, DifficultyEnum2IconMapping, DifficultyEnum2LabelMapping} from './difficulty.enum';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss'],
})
export class DifficultyComponent implements OnInit {
  @Input() type: string = DifficultyEnum.EASY;

  DifficultyEnum = DifficultyEnum;
  DifficultyEnum2IconMapping = DifficultyEnum2IconMapping;
  DifficultyEnum2LabelMapping = DifficultyEnum2LabelMapping;

  constructor() { }

  ngOnInit() {}

}

