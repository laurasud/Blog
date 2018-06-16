import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { PostComponent } from './all-posts/post/post.component';
import { SortPipe } from './sort.pipe';

const appRoutes: Routes = [
  { path: 'create', pathMatch: 'full', component: CreatePostComponent},
  { path: 'home', pathMatch: 'full', component: AllPostsComponent},
  { path: 'update/:name', pathMatch: 'full', component: UpdatePostComponent },
  { path: 'post/:name', pathMatch: 'full',  component: ReadPostComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
    { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    CreatePostComponent,
    ReadPostComponent,
    UpdatePostComponent,
    PostComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgxPaginationModule
  ],
  
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
