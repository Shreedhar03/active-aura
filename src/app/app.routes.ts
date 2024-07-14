import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-workout',
    component: AddWorkoutComponent,
  },
];
