import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';
import {Router} from '@angular/router';

@Component({
    selector: 'app-before-after',
    templateUrl: './before-after.page.html',
    styleUrls: ['./before-after.page.scss'],
})
export class BeforeAfterPage extends PageBaseComponent  implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.BEFORE_AFTER;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    addNewPicture() {
        this._router.navigate(['/', PagesEnum2RoutingMapping.BEFORE_AFTER_LIST])

    }
}
