import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    title: string = 'Filters';

    checkboxes: ICheckbox[] = [
        {

            group: 'focus',
            list: [
                {
                    label: 'Lower Body',
                    checked: false,
                },
                {
                    label: 'Upper Body',
                    checked: false,
                },
                {
                    label: 'Yoga',
                    checked: false,
                },
                {
                    label: 'Strength',
                    checked: true,
                },
                {
                    label: 'Cycling',
                    checked: false,
                },
                {
                    label: 'Youth',
                    checked: false,
                }
            ]
        },
      {
        group: 'category',
        list: [
          {
            label: 'Core',
            checked: true,
          },
          {
            label: 'Mind & Body',
            checked: false,
          },
          {
            label: 'Other',
            checked: false,
          },
          {
            label: 'Cardio',
            checked: true,
          },
          {
            label: 'Strength',
            checked: false,
          },
          {
            label: 'Cycling',
            checked: false,
          },
          {
            label: 'Dance',
            checked: false,
          },
          {
            label: 'Martial Arts',
            checked: false,
          },
          {
            label: 'What\'s New',
            checked: true,
          },
          {
            label: 'HIIT',
            checked: false,
          },
          {
            label: 'Target Zone',
            checked: false,
          }
        ]
      },
      {
        group: 'difficulty',
        list: [
          {
            label: 'Easy',
            checked: false,
          },
          {
            label: 'Standard',
            checked: false,
          },
          {
            label: 'Advanced',
            checked: false,
          },
          {
            label: 'Flex',
            checked: true,
          }
        ]
      },
      {
        group: 'duration',
        list: [
          {
            label: '< 20 minutes',
            checked: false,
          },
          {
            label: '20–40 minutes',
            checked: false,
          },
          {
            label: '40+ minutes',
            checked: false,
          },
        ]
      },
      {
        group: 'rating',
        list: [
          {
            label: '5+ Stars',
            checked: false,
          },
          {
            label: '4+ Stars',
            checked: false,
          },
          {
            label: '3+ Stars',
            checked: false,
          },
          {
            label: '2+ Stars',
            checked: true,
          },
          {
            label: '1+ Stars',
            checked: true,
          }
        ]
      },

    ];

    constructor(private _modalController: ModalController) {
    }

    ngOnInit() {
    }

    back() {
        this._modalController.dismiss();

    }

    clearFilter() {

    }
}

export interface ICheckbox {
    group: 'focus' | 'category' | 'difficulty' | 'duration' | 'rating';
    list: {
        label: string;
        checked: boolean;
    }[];
}
