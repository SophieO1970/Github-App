import { Injectable } from '@angular/core';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchRepoService {
  ReposGotten: Repo[];

  getRepos(term: string) {
    let endpoint = `https://api.github.com/search/repositories?access token=${environment.apiKey}&q=${term}`
    let promise = new Promise ((resolve, reject)=>{
      this.http
      .get(endpoint)
      .toPromise()
      .then(
        (results) => {
          this.ReposGotten = [];
          for (let i = 0; i < results['items'].length; i++) {
            
          }

        }
      )


    })
  }









  constructor(private http: HttpClient) { }
}
