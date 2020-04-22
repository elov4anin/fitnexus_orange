import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-food',
    templateUrl: './food.page.html',
    styleUrls: ['./food.page.scss'],
})
export class FoodPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.MEALS;
    selectedType: any;
    selectedMeal: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon').querySelector('.select-icon-inner');
            if(selectIconInner){
                selectIconInner.setAttribute('style', 'display: none !important');
            }
        });
    }

}
