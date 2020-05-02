import { Component, OnInit } from '@angular/core';
import {DifficultyEnum, DifficultyEnum2IconMapping, DifficultyEnum2LabelMapping} from '../../../../shared/components/difficulty/difficulty.enum';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-difficulty-list',
  templateUrl: './difficulty-list.component.html',
  styleUrls: ['../../shared.scss', './difficulty-list.component.scss'],
})
export class DifficultyListComponent implements OnInit {
  difficulties =  Object.keys(DifficultyEnum).map((key) => DifficultyEnum[key]);
  DifficultyEnum2IconMapping = DifficultyEnum2IconMapping;
  DifficultyEnum2LabelMapping = DifficultyEnum2LabelMapping;
  constructor(private _router: Router) { }

  ngOnInit() {}

  redirectTo() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY]);
  }

}
