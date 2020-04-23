import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-before-after',
    templateUrl: './before-after.page.html',
    styleUrls: ['./before-after.page.scss'],
})
export class BeforeAfterPage extends PageBaseComponent  implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.BEFORE_AFTER;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addNewPicture() {

    }
}
