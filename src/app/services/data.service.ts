import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('data service connect');
  }

  getData(url){
    return this.http.get(url).map(
    	res => res.json()
    );
  }
}
