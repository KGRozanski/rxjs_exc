import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.style.scss']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {}

  private posts = [];
  title = 'app';

  ngOnInit() {
    this.dataService.checkManifest();
    this.dataService.initalPlanets();
    this.dataService.currentData.subscribe(data => {
      this.posts = data;
    });
  }

}
