import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {
  public domain:string='';
  public content:any={};

  constructor(public route: ActivatedRoute, public common:CommonService) { 
    this.domain = this.common.domain;
    console.log('***********domain='+this.domain);
  }

  ngOnInit() {
    this.route.params.subscribe((value:any)=>{
      console.log(value);
      this.requestContent(value.id);
    });
  }

  requestContent(id){
    //http://localhost:8888/applebee/dishcontent?id=201
    var api='dishcontent?id='+id;
    this.common.get(api).then((response:any)=>{
      this.content=response;
      console.log(this.content);
    })
  }



}
