import { Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeComponent } from './components/home/home.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'add-workout',
    component: AddWorkoutComponent,
  },
];
