import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping, PagesEnum2RoutingMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-add-body-comp',
    templateUrl: './add-body-comp.page.html',
    styleUrls: ['./add-body-comp.page.scss'],
})
export class AddBodyCompPage extends PageBaseComponent  implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.ADD_BODY_COMP;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    addBodyComp(): void {
        this._router.navigate(["/", PagesEnum2RoutingMapping.ADD_MEASUREMENTS])

    }
}
