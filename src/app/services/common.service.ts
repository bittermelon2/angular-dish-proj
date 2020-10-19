import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public domain:string='http://localhost:8888/applebee/';

  constructor(public http: HttpClient) { }

/*  /dishes
    http://localhost:8888/applebee/dishes 
*/
  get(api){
    return new Promise((resolve, reject)=>{
      this.http.get(this.domain+api).subscribe((response)=>{
        resolve(response);
      })
    });
  }
}
