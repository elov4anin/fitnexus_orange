import {Component, OnInit} from '@angular/core';
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';
import {PageBaseComponent} from '../../shared/components/page-base/page-base.component';
import {ISlideInfo} from '../get-started/get-started.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-club',
    templateUrl: './club.page.html',
    styleUrls: ['./club.page.scss'],
})
export class ClubPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.CLUB;
    latestArticles: ISlideInfo[] = [
        {
            title: "We tested at-home workouts during quarantine",
            imgSrc: "/assets/images/club/2c27323ee9e26ef4c00bdd8c8869a20e@2x.png",
            text: 'Why High-Low Training is the best way to get the most value out of your self-isolation'
        },
        {
            title: "Why Nutrition is the most Important  Part of Fitness",
            imgSrc: "/assets/images/club/e54b9841801f2e6c7bd060721ca60555@2x.png",
            text: 'The trend is now to focus on healthy food intake as a primary fitness goa'
        },
    ];
    specialOffers:  ISlideInfo[] = [
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
        super();
    }

    ngOnInit() {
    }

    openSpecialOffers() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.CLUB, PagesEnum2RoutingMapping.SPECIAL_OFFERS]);
    }
}
