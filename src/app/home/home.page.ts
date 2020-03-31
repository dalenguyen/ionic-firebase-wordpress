import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  posts$: Observable<Post[]>;

  constructor(private fireStore: AngularFirestore) {
    this.posts$ = this.fireStore.collection<any>('wpPosts').valueChanges();
  }
}
