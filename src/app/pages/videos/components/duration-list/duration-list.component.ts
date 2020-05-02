import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-duration-list',
  templateUrl: './duration-list.component.html',
  styleUrls: ['../../shared.scss', './duration-list.component.scss'],
})
export class DurationListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {}

  redirectTo() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY]);
  }
}
