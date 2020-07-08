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
            imgSrc: "/assets/images/categories/cardio@2x.png"
        },
        {
            title: "Strength",
            imgSrc: "/assets/images/categories/strength@2x.png"
        },
        {
            title: "Cycling",
            imgSrc: "/assets/images/categories/cycling@2x.png"
        },
        {
            title: "Dance",
            imgSrc: "/assets/images/categories/dance@2x.png"
        },
        {
            title: "Martial Arts",
            imgSrc: "/assets/images/categories/martial_arts@2x.png"
        },
        {
            title: "Mind & Body",
            imgSrc: "/assets/images/categories/mind_body@2x.png"
        },
        {
            title: "Hiit",
            imgSrc: "/assets/images/categories/hiit@2x.png"
        },
        {
            title: "Core",
            imgSrc: "/assets/images/categories/core@2x.png"
        },
        {
            title: "Target Zone",
            imgSrc: "/assets/images/categories/target_zone@2x.png"
        },
        {
            title: "Other",
            imgSrc: "/assets/images/categories/other@2x.png"
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
