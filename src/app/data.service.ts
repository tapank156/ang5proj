import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>([]);
  public goal = this.goals.asObservable();

  changeGoal(goal) {
    this.goals.next(goal);
  }
  constructor() { }
}
