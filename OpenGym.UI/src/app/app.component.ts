import { Component } from '@angular/core';
import { Exercise } from './models/exercise';
import { ExerciseService } from './services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenGym.UI';
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() : void {
    this.exerciseService
      .getExercises()
      .subscribe((result: Exercise[]) => (this.exercises = result));
  }
}
