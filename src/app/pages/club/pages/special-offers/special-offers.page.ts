import {Component, OnInit} from '@angular/core';
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';
import {Router} from '@angular/router';
import {ISlideInfo} from '../../../get-started/get-started.page';

@Component({
    selector: 'app-special-offers',
    templateUrl: './special-offers.page.html',
    styleUrls: ['./special-offers.page.scss'],
})
export class SpecialOffersPage implements OnInit {
    titlePage: string = PagesEnum2NamesMapping.SPECIAL_OFFERS;
    news: ISlideInfo[] = [
        {
            title: "Black Friday 2020 Sales!",
            imgSrc: "/assets/images/club/956222b4a2018d9064d1db2d63a921bc@2x.png",
            text: '–80% for a year of premium content!'
        },
        {
            title: "A Gift for active clients!",
            imgSrc: "/assets/images/club/b836b712f340f9f32edf40fb51436039@2x.png",
            text: 'Get a free month of Pro Subscription by using app every day during month!'
        },
        {
            title: "Black Friday 2020 Sales!",
            imgSrc: "/assets/images/club/956222b4a2018d9064d1db2d63a921bc@2x.png",
            text: '–80% for a year of premium content!'
        },
        {
            title: "A Gift for active clients!",
            imgSrc: "/assets/images/club/b836b712f340f9f32edf40fb51436039@2x.png",
            text: 'Get a free month of Pro Subscription by using app every day during month!'
        },
    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    openNewsPage() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.CLUB, PagesEnum2RoutingMapping.ARTICLE])
    }
}
