import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.page.html',
    styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.FEEDBACK;
    rate: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    onRateChange($event: number) {

    }
}
