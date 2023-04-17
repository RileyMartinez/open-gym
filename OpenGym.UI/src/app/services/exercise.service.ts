import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private url = "Exercise";

  constructor(private configService: ConfigService, private http: HttpClient) { }

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.configService.config.apiUrl}/${this.url}`);
  }
}
