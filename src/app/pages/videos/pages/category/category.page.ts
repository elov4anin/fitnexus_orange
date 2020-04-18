import {Component, OnInit} from '@angular/core';
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../../../shared/enums/pages.enum';
import {ISlideInfo} from '../../../get-started/get-started.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
    title: string = PagesEnum2NamesMapping.CATEGORY;
    categories: ISlideInfo[] = [
        {
            title: "easy yoga routine",
            imgSrc: "/assets/images/new_video@2x.png"
        },
        {
            title: "easy yoga routine 2",
            imgSrc: "/assets/images/new_video@2x.png"
        },
        {
            title: "easy yoga routine 3",
            imgSrc: "/assets/images/new_video@2x.png"
        },
        {
            title: "easy yoga routine 4",
            imgSrc: "/assets/images/new_video@2x.png"
        },
        {
            title: "easy yoga routine 5",
            imgSrc: "/assets/images/new_video@2x.png"
        },
        {
            title: "easy yoga routine 6",
            imgSrc: "/assets/images/new_video@2x.png"
        }
    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

  redirectTo() {
      this._router.navigate(['/', PagesEnum2RoutingMapping.VIDEOS, PagesEnum2RoutingMapping.VIDEO_ITEM])

  }
}
