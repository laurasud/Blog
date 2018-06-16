import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit {
  
  datas: any;  
  p: number = 1;
  collection: any[];


  constructor(private ds: DataService, private router: Router) {
    ds.addToStorage();
    this.datas = ds.getData();
    this.collection = this.datas;
  }

  ngOnInit() {
 }

 Check(){
   this.datas = this.ds.getData();
 }

}
