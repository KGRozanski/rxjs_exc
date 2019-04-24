import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  private page: number = 1;
  private sol: number = 0;

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  next() {
    this.page++;
    this.ds.getPlanets(this.sol, this.page);
  }
  prev() {
    this.page--;
    this.ds.getPlanets(this.sol, this.page);
  }
  pulldata(){
    this.ds.getPlanets(this.sol);
  }
}
