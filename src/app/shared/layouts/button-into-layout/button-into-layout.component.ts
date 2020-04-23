import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LayoutsEnum} from "../../enums/layouts.enum";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {PagesEnum2RoutingMapping} from '../../enums/pages.enum';

@Component({
  selector: 'app-button-into-layout',
  templateUrl: './button-into-layout.component.html',
  styleUrls: ['./button-into-layout.component.scss'],
})
export class ButtonIntoLayoutComponent implements OnInit {

  @Input() listBtnForLayout: string;

  buttons: ITopButton[] = [];

  template: number = 1;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.setButtons();
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveButton(event.url.replace("/", ""));
      }
    })
  }


  toggleButton(redirectTo: string): void {
    if (this._router.url.includes(redirectTo)) {
      return;
    }
    this.setActiveButton(redirectTo);
    this._router.navigate(["/", redirectTo]);
  }

  private setActiveButton(url: string): void {
    const idx = this.buttons.findIndex(b => b.activePages.includes(url));
    this.buttons.forEach(b => b.active = false);
    this.buttons[idx] = {
      ...this.buttons[idx],
      active: true
    };
  }

  private setButtons() {
    switch (this.listBtnForLayout) {
      case LayoutsEnum.MESSAGES_INTO: {
        this.buttons =  [
          {
            text: 'Members',
            icon: '',
            redirectTo: 'messages',
            active: true,
            activePages: ['messages'],
          },
          {
            text: 'Stuff',
            icon: '',
            redirectTo: 'stuff',
            active: false,
            activePages: ['stuff'],
          },
        ];
        this.template = 1;
        break
      }
      case LayoutsEnum.BODY: {
        this.buttons =  [
          {
            text: 'Measurements',
            icon: 'ios-body-black.svg',
            activeIcon: 'ios-body-orange.svg',
            redirectTo: PagesEnum2RoutingMapping.ADD_BODY_COMP,
            active: false,
            activePages: [PagesEnum2RoutingMapping.ADD_BODY_COMP],
          },
          {
            text: 'Before & after',
            icon: 'ios-camera-black.svg',
            activeIcon: 'ios-camera-orange.svg',
            redirectTo: PagesEnum2RoutingMapping.BEFORE_AFTER,
            active: false,
            activePages: [PagesEnum2RoutingMapping.BEFORE_AFTER],
          },

        ];
        this.template = 1;
        break
      }
    }
  }

}
