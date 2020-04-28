import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {Router} from "@angular/router";
import {PagesEnum2NamesMapping} from '../../shared/enums/pages.enum';

@Component({
    selector: 'app-training',
    templateUrl: './training.page.html',
    styleUrls: ['./training.page.scss'],
})
export class TrainingPage extends PageBaseComponent implements OnInit {
    pageTitle: string = PagesEnum2NamesMapping.NEW_PROGRAMME;
    selectedExercises: any;
    selectedWeight: any;
    selectedReps: any;

    sets: ISet[] = [
        {
            id: 1,
            name: 'goal',
            weight: 150,
            reps: 3,
            deleted: false
        },
        {
            id: 2,
            name: '1',
            weight: 150,
            reps: 3,
            deleted: false
        },
        {
            id: 3,
            name: '2',
            weight: 150,
            reps: 3,
            deleted: false
        },
    ];

    constructor(private _router: Router) {
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

    addExercise() {

    }

    addImage() {

    }

    deleteExercise() {

    }

    saveProgram() {
        this._router.navigate(['/stat-program'])

    }

    saveExercise() {

    }

    deleteSet(s: ISet) {
        this.sets = this.sets.filter(i => i.id !== s.id);
    }
}

export interface ISet {
    id: number;
    name: string;
    weight: number;
    reps: number;
    deleted: boolean;
}
