import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {LayoutsEnum} from "../../enums/layouts.enum";
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../enums/pages.enum';
import {TabsEnum2IconActiveMapping, TabsEnum2IconMapping} from '../../enums/tabs.enum';

@Component({
    selector: 'app-button-layout',
    templateUrl: './button-layout.component.html',
    styleUrls: ['./button-layout.component.scss'],
})
export class ButtonLayoutComponent implements OnInit {

    @Input() listBtnForLayout: string;

    buttons: ITopButton[] = [];

    template: number = 1;
    PagesEnum2RoutingMapping = PagesEnum2RoutingMapping;
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
            return
        }
        this.setActiveButton(redirectTo);
        this._router.navigate(["/", redirectTo]);
    }

    private setActiveButton(url: string): void {
        if (url.includes('/')) {
            url = url.split('/')[0];
        }
        const idx = this.buttons.findIndex(b => b.activePages.includes(url));
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ...this.buttons[idx],
            active: true
        };
    }

    private setButtons() {
        switch (this.listBtnForLayout) {
          /*  case LayoutsEnum.ACCOUNT: {
                this.buttons = [
                    {
                        text: 'account',
                        icon: 'ios-person-black.svg',
                        activeIcon: 'ios-person-blue.svg',
                        redirectTo: 'account',
                        active: true,
                        activePages: ['account'],
                    },
                    {
                        text: 'fitness',
                        icon: 'ios-fitness.svg',
                        activeIcon: 'ios-fitness-blue.svg',
                        redirectTo: 'welcome-programs',
                        active: false,
                        activePages: ['welcome-programs'],
                    },
                    {
                        text: 'albums',
                        icon: 'ios-photos-black.svg',
                        activeIcon: 'ios-photos-blue.svg',
                        redirectTo: 'albums',
                        active: false,
                        activePages: ['albums'],
                    }
                ];
                this.template = 2;
                break;
            }*/
           /* case LayoutsEnum.MESSAGES: {
                this.buttons = [
                    {
                        text: 'New message',
                        icon: 'ios-mail.svg',
                        activeIcon: 'ios-mail.svg',
                        redirectTo: 'messages',
                        active: true,
                        activePages: ['messages', 'chat', 'stuff'],
                    },
                ];
                this.template = 1;
                break;
            }*/
            case LayoutsEnum.NOTIFICATIONS: {
                this.buttons = [
                    {
                        text: 'Notifications',
                        icon: 'notifications.svg',
                        activeIcon: 'notifications.svg',
                        redirectTo: PagesEnum2RoutingMapping.NOTIFICATIONS,
                        active: true,
                        activePages: [PagesEnum2RoutingMapping.NOTIFICATIONS],
                    },
                ];
                this.template = 1;
                break;
            }

          /*  case LayoutsEnum.ALBUMS: {
                this.buttons = [
                    {
                        text: 'Albums',
                        icon: 'ios-photos-white.svg',
                        activeIcon: 'ios-photos-white.svg',
                        redirectTo: 'albums',
                        active: true,
                        activePages: ['albums'],
                    },
                ];
                this.template = 1;
                break;
            }*/
         /*   case LayoutsEnum.NEWS: {
                this.buttons = [
                    {
                        text: 'Feed',
                        icon: 'ios-list-box-white.svg',
                        redirectTo: 'news-feed',
                        active: true,
                        activePages: ['news-feed'],
                    },
                    {
                        text: 'Members',
                        icon: 'ios-person-white.svg',
                        redirectTo: 'members',
                        active: false,
                        activePages: ['members', 'members-connect'],
                    }
                ];
                this.template = 1;
                break
            }*/
            case LayoutsEnum.TRACKING: {
                this.buttons = [
                    {
                        text: 'trackers',
                        icon: 'md-watch-black.svg',
                        activeIcon: 'md-watch-white.svg',
                        redirectTo: PagesEnum2RoutingMapping.ADD_DEVICE,
                        active: true,
                        activePages: [PagesEnum2RoutingMapping.STAT_BY_DEVICE, PagesEnum2RoutingMapping.ADD_DEVICE],
                    },
                    {
                        text: 'fitness',
                        icon: 'ios-fitness-black.svg',
                        activeIcon: 'ios-fitness-white.svg',
                        redirectTo: PagesEnum2RoutingMapping.WELCOME_PROGRAMMES,
                        active: false,
                        activePages: [PagesEnum2RoutingMapping.WELCOME_PROGRAMMES, PagesEnum2RoutingMapping.NEW_PROGRAMME, PagesEnum2RoutingMapping.STAT_PROGRAMME],
                    },
                    {
                        text: 'body-comp',
                        icon: 'ios-man-black.svg',
                        activeIcon: 'ios-man-white.svg',
                        redirectTo: PagesEnum2RoutingMapping.ADD_BODY_COMP,
                        active: false,
                        activePages: [
                            PagesEnum2RoutingMapping.ADD_BODY_COMP,
                            PagesEnum2RoutingMapping.BEFORE_AFTER,
                            PagesEnum2RoutingMapping.BEFORE_AFTER_LIST,
                            PagesEnum2RoutingMapping.ADD_MEASUREMENTS,
                            PagesEnum2RoutingMapping.MEASUREMENTS,
                            'measurement-detail'
                        ],
                    },
                    {
                        text: 'Challenges',
                        icon: 'ios-trophy-black.svg',
                        activeIcon: 'ios-trophy-white.svg',
                        redirectTo: PagesEnum2RoutingMapping.CHALLENGES,
                        active: true,
                        activePages: [PagesEnum2RoutingMapping.CHALLENGES],
                    },
                ];
                this.template = 2;
                break
            }
           /* case LayoutsEnum.CALENDAR: {
                this.buttons =  [
                    {
                        text: 'Upcoming',
                        icon: 'ios-clock.svg',
                        redirectTo: 'calendar',
                        active: true,
                        activePages: ['calendar'],
                    },
                    {
                        text: 'My bookings',
                        icon: 'ios-journal.svg',
                        redirectTo: 'my-bookings',
                        active: false,
                        activePages: ['my-bookings'],
                    },
                ];
                this.template = 1;
                break
            }*/
            /*case LayoutsEnum.CHALLENGES: {
                this.buttons =  [
                    {
                        text: 'Challenges',
                        icon: 'ios-flag.svg',
                        redirectTo: 'challenges',
                        active: true,
                        activePages: ['challenges'],
                    },
                    {
                        text: 'Leaderboard',
                        icon: 'ios-list.svg',
                        redirectTo: 'leaderboard',
                        active: false,
                        activePages: ['leaderboard'],
                    }
                ];
                this.template = 1;
                break
            }*/
            case LayoutsEnum.MEALS: {
                this.buttons =  [
                    {
                        text:  PagesEnum2NamesMapping.MEALS,
                        icon: 'tabs/food.svg',
                        activeIcon: 'tabs/food-active.svg',
                        redirectTo: PagesEnum2RoutingMapping.MEALS,
                        active: true,
                        activePages: [PagesEnum2RoutingMapping.MEALS],
                    },
                    {
                        text: PagesEnum2NamesMapping.MEAL_PLANNER,
                        icon: 'ios-calendar-black.svg',
                        activeIcon: 'ios-calendar-orange.svg',
                        redirectTo: PagesEnum2RoutingMapping.MEAL_PLANNER,
                        active: false,
                        activePages: [PagesEnum2RoutingMapping.MEAL_PLANNER],
                    }
                ];
                this.template = 1;
                break
            }
            case LayoutsEnum.LIBRARY: {
                this.buttons =  [
                    {
                        text: 'Library',
                        icon: 'ios-journal-black.svg',
                        activeIcon: 'ios-journal-orange.svg',
                        redirectTo: PagesEnum2RoutingMapping.LIBRARY_PROGRAMMES,
                        active: true,
                        activePages: [PagesEnum2RoutingMapping.LIBRARY_PROGRAMMES],
                    },
                    {
                        text: 'My programmes',
                        icon: 'ios-person-black.svg',
                        activeIcon: 'ios-person-orange.svg',
                        redirectTo: PagesEnum2RoutingMapping.MY_PROGRAMMES,
                        active: false,
                        activePages: [PagesEnum2RoutingMapping.MY_PROGRAMMES],
                    },

                ];
                this.template = 1;
                break
            }
            /*case LayoutsEnum.CLASSES: {
                this.buttons =  [
                    {
                        text: 'Class',
                        icon: 'ios-person-white.svg',
                        redirectTo: 'class',
                        active: true,
                        activePages: ['class'],
                    },
                    {
                        text: 'Feedback',
                        icon: 'ios-journal.svg',
                        redirectTo: PagesEnum2RoutingMapping.FEEDBACK,
                        active: false,
                        activePages: [PagesEnum2RoutingMapping.FEEDBACK],
                    },
                ];
                this.template = 1;
                break
            }*/
        }
    }
}
