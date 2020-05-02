import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-focus-list',
  templateUrl: './focus-list.component.html',
  styleUrls: ['../../shared.scss', './focus-list.component.scss'],
})
export class FocusListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {}

  redirectTo() {
    this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY]);
  }

}
