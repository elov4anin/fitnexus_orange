import { NgModule } from '@angular/core';

import { FoodPageRoutingModule } from './food-routing.module';

import { FoodPage } from './food.page';
import {SharedModule} from "../../shared/shared.module";
import {VideosPageModule} from '../videos/videos.module';
import {PopularCuisinesComponent} from './popular-cuisines/popular-cuisines.component';
import {PopularDietsComponent} from './popular-diets/popular-diets.component';
import {IntolerancesComponent} from './intolerances/intolerances.component';

@NgModule({
    imports: [
        SharedModule,
        FoodPageRoutingModule,
        VideosPageModule
    ],
  declarations: [
      FoodPage,
      PopularCuisinesComponent,
      PopularDietsComponent,
      IntolerancesComponent
  ]
})
export class FoodPageModule {}
