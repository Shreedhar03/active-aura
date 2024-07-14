import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Workout {
  type: string;
  minutes: number;
}

interface UserData {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.css',
})
export class AddWorkoutComponent {
  workoutForm = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
    type: new FormControl('Gym'),
  });

  userData: UserData[] | null = null;

  ngOnInit() {
    const initialData = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 },
        ],
      },
    ];

    const storedData: UserData[] = JSON.parse(
      localStorage.getItem('userData') || '[]'
    );
    this.userData = storedData.length ? storedData : null;
    if (!this.userData) {
      localStorage.setItem('userData', JSON.stringify(initialData));
      this.userData = initialData;
    } else {
      this.userData = this.userData;
    }
  }

  onSubmit() {
    const formValue = this.workoutForm.value;
    console.warn(formValue);

    // Retrieve existing userData from localStorage
    const storedData = localStorage.getItem('userData');
    let userData = storedData ? JSON.parse(storedData) : [];

    let user = userData.find((u: any) => u.name === formValue.name);
    if (!user) {
      user = {
        id: userData.length + 1,
        name: formValue.name,
        workouts: [],
      };
      userData.push(user);
    }

    user.workouts.push({
      type: formValue.type,
      minutes: parseInt(formValue.duration ?? '0', 10),
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
