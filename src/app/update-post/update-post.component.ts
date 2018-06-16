import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  name: string
  nameValue: string;
  textValue: string
  update: Date;
  item: any;

  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService) {
    this.item = this.ds.getItem(this.name);
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.item = this.ds.getItem(this.name);
    this.nameValue = this.item.name;
    this.textValue = this.item.text;
  }

  onSave(text: string){
    this.ds.updatePost(this.nameValue, text)
    this.router.navigate(['post', this.nameValue]);
  }

}
