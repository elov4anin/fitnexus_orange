import {Component, OnInit} from '@angular/core';
import {ISlideInfo} from '../../../get-started/get-started.page';
import {Router} from '@angular/router';
import {PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

    list: ISlideInfo[] = [
        {
            title: "Cardio",
            imgSrc: "/assets/images/categories/cardio.png"
        },
        {
            title: "Core",
            imgSrc: "/assets/images/categories/core.png"
        },
        {
            title: "Cycling",
            imgSrc: "/assets/images/categories/cycling.png"
        },
        {
            title: "Dance",
            imgSrc: "/assets/images/categories/dance.png"
        },
        {
            title: "Martial Arts",
            imgSrc: "/assets/images/categories/martial_arts.png"
        },
        {
            title: "Strength",
            imgSrc: "/assets/images/categories/strength.png"
        },
        {
            title: "Mind & Body",
            imgSrc: "/assets/images/categories/mind_body.png"
        },
        {
            title: "Hiit",
            imgSrc: "/assets/images/categories/hiit.png"
        },
        {
            title: "Target Zone",
            imgSrc: "/assets/images/categories/target_zone.png"
        },
        {
            title: "Other",
            imgSrc: "/assets/images/categories/other.png"
        },
    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    redirectTo() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.CATEGORY])
    }
}
