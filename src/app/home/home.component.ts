import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount: Number = 0;
  btnText: String = 'Clear';
  btnText1: String = 'Add';
  goalText: String = 'Magic show goes here ...';
  goals: String [] = [];
  clear(i) {
    console.log('clear' + i);
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._dataService.changeGoal(this.goals);
  }
  add() {
    console.log('add');
    this.goals.push( this.goalText + '${this.goals.length}');
    //this.goalText = '';
    this.itemCount = this.goals.length;
    this._dataService.changeGoal(this.goals);
  }
  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    console.log('Loading Home');
    this._dataService.goal.subscribe(r => this.goals = r);
    this.itemCount = this.goals.length;
    this._dataService.changeGoal(this.goals);
  }
}
