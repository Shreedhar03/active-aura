import { Component, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent {
  name: String = 'Explore';
  customers: any[] = ['John', 'Jane', 'Jack'];
  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 },
      ],
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
      ],
    },
  ];

  // userData:[] = localStorage.getItem('userData') || []
  searchForm = new FormGroup({
    search: new FormControl(),
  });

  get filteredData() {
    return this.userData?.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.searchForm.value.search.toLowerCase());
    });
  }
}
