import { Component, OnInit } from '@angular/core';
import {PagesEnum2NamesMapping} from '../../../../shared/enums/pages.enum';

@Component({
  selector: 'app-referral',
  templateUrl: './referral-page.component.html',
  styleUrls: ['./referral-page.component.scss'],
})
export class ReferralPage implements OnInit {
  title: string = PagesEnum2NamesMapping.REFERRAL;
  constructor() { }

  ngOnInit() {
  }

}
