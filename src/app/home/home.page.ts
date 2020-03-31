import { Component } from '@angular/core';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  posts: Post[] = [
    {
      post_title: 'Title',
      post_excerpt: 'short description',
      post_date: '2020-03-08 01:27:59',
      post_author: 'Dale Nguyen',
      post_thumbnail:
        'https://miro.medium.com/max/4800/1*jFsgUxz4Dm4HDIlpMjz8Sg.png',
      post_content:
        '<!-- wp:paragraph --><p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p><!-- /wp:paragraph -->'
    }
  ];

  constructor() {}
}
