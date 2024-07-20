import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _http = inject(HttpClient);

  postUrl : string = `${environment.baseUrl}/posts.json`
  constructor() { }

  fetchAllPosts() : Observable<Array<Ipost>>{
    return this._http.get<any>(this.postUrl)
          .pipe(
            map(data => {
              let postsArr : Array<Ipost> = [];
              for (const key in data) {
                  postsArr.push({...data[key], id : key})  
                }
                return postsArr
            })
          )
  }
}
