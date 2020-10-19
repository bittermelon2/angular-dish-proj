import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list:any[]=[];

  constructor(public common:CommonService) { }

  ngOnInit() {
    var api = "dishes";
    this.common.get(api).then((response:any)=>{
      console.log(response);
      this.list = response.result;
      
    });
  }

}
