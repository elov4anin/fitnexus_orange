import {NgModule} from '@angular/core';

import {MealPlannerPageRoutingModule} from './meal-planner-routing.module';

import {MealPlannerPage} from './meal-planner.page';
import {SharedModule} from "../../shared/shared.module";
import {CaloriesComponent} from './components/calories/calories.component';

@NgModule({
    imports: [
        SharedModule,
        MealPlannerPageRoutingModule
    ],
    declarations: [
        MealPlannerPage,
        CaloriesComponent
    ]
})
export class MealPlannerPageModule {
}
