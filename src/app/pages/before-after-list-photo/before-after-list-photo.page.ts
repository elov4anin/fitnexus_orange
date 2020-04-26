import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from '../../shared/components/page-base/page-base.component';
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-before-after-list-photo',
    templateUrl: './before-after-list-photo.page.html',
    styleUrls: ['./before-after-list-photo.page.scss'],
})
export class BeforeAfterListPhotoPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.BEFORE_AFTER_LIST;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addNewPicture() {

    }
}
