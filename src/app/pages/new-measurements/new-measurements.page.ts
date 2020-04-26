import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-new-measurements',
    templateUrl: './new-measurements.page.html',
    styleUrls: ['./new-measurements.page.scss'],
})
export class NewMeasurementsPage extends PageBaseComponent  implements OnInit {
    pageTitle: string =  PagesEnum2NamesMapping.ADD_MEASUREMENTS;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    save(): void {
        this._router.navigate(["/stat-measurements"]);
    }
}
