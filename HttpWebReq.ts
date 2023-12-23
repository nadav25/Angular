


//Instructions on how to send a web request


//at app.module.ts add this line 

import { HttpClientModule } from '@angular/common/http';

//at @ngModule add 
imports: [HttpClientModule],
@NgModule({
  imports: [HttpClientModule]
})



//component file 

   onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost<Post,Post>('', postData)
    .subscribe(
      response => {

      },
      error => {

      }
    );
  }

  

//service file 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost<TsendObj,UGetObj>(url: string, jsonData: TsendObj) {
    return this.http
      .post<UGetObj>(url,jsonData)
  }

  fetchPosts<UGetObj>(URL : string) {
    return this.http.get<UGetObj>(URL)
  }

  
}


  



