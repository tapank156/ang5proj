import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  idText: String = '';
  goals: any;
  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
    this.route.params.subscribe(r => this.idText = r.id);
  }

  remove(i) {
    console.log('clear' + i);
    this.goals.splice(i, 1);
    this._dataService.changeGoal(this.goals);
  }
  backHome() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
    console.log('Loading About');
    this._dataService.goal.subscribe(r => this.goals = r);
  }

}
