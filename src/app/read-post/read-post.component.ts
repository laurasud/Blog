import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {

  param: string
  name: string;
  text: string
  update: Date;
  created_at: Date;
  item: any;

  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService) { 
    this.item = this.ds.getItem(this.param);
  }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('name');
    this.item = this.ds.getItem(this.param);
    this.name = this.item.name;
    this.text = this.item.text;
    this.created_at = this.item.created_at;
    this.update =this.item.update;
  }

}
