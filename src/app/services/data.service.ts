import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  //Query variables
  private api_url = 'https://api.nasa.gov/mars-photos/api/v1/';
  private api_key = 'R55Qv2CZZeoFR6XhPGSVD9UBdx2V1crTTLtnrEcC';

  //Other variables in use for this service
  private manifest: Object;

  //Data source to fetching data from another component
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  initalPlanets() {
    this.getPlanets(0, 1);
  }


  checkManifest() {
    this.http.get(this.api_url + 'manifests/Curiosity?api_key=' + this.api_key).subscribe(
      (res)=>{
        this.manifest = res['photo_manifest'];
        console.log(this.manifest);
      }
    );
  }

  getPlanets(sol, ?:page) {
    this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ sol +'&api_key=R55Qv2CZZeoFR6XhPGSVD9UBdx2V1crTTLtnrEcC&page='+page).subscribe(
      (res)=>{
        this.dataSource.next(res['photos']);
        console.log(res['photos']);
      }
    );
  }

}
