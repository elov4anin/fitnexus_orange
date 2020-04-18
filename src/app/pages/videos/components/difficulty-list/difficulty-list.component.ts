import { Component, OnInit } from '@angular/core';
import {DifficultyEnum, DifficultyEnum2IconMapping, DifficultyEnum2LabelMapping} from '../../../../shared/components/difficulty/difficulty.enum';

@Component({
  selector: 'app-difficulty-list',
  templateUrl: './difficulty-list.component.html',
  styleUrls: ['../../shared.scss', './difficulty-list.component.scss'],
})
export class DifficultyListComponent implements OnInit {
  difficulties =  Object.keys(DifficultyEnum).map((key) => DifficultyEnum[key]);
  DifficultyEnum2IconMapping = DifficultyEnum2IconMapping;
  DifficultyEnum2LabelMapping = DifficultyEnum2LabelMapping;
  constructor() { }

  ngOnInit() {}

}
