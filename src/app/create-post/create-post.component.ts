import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  data;

  constructor(private ds: DataService, private router: Router) { }


  ngOnInit() {
  }

  onCreate(name: string, text: string){
    this.data = this.ds.getData();
    for (let i=0; i<this.data.length; i++){
      if (this.data[i].name === name){
        name = name + ' (1)';
      }
    }
    this.ds.addData(name, text);
    this.router.navigate(['home']);
  }

}
