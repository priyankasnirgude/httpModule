import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/posts.interface';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

postArray !: Array<Ipost>

  private _postService = inject(PostsService)
  constructor() { }

  ngOnInit(): void {
    this._postService.fetchAllPosts()
    .subscribe(res => {
      this.postArray = res;
    })
  }



}
