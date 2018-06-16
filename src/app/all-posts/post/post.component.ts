import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../../data.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() data: any;

  constructor(private router: Router, private ds: DataService) { 
  }

  ngOnInit() {

  }

  onUpdate(name: string) {
    this.router.navigate(['update', name]); 
  }

  onView(name: string) {
    this.router.navigate(['post', name]); 
  }

  onDelete(name: string) {
    if (confirm("Are you sure you want to delete this post?")) {
      this.data.show = false;
      this.ds.deletePost(name);
    } 
  }

}
