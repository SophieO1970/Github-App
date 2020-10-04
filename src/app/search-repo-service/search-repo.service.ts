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
            let name = results['items'][i]['full_name'];
              let description = results['items'][i]['description'];
              let language = results['items'][i]['language'];
              let year = parseInt(
                results['items'][i]['created_at'].substr(0, 4)
              );
              let month =
                parseInt(results['items'][i]['created_at'].substr(5, 7)) - 1;
              let day = parseInt(
                results['items'][i]['created_at'].substr(8, 10)
              );
              let date = new Date(year, month, day);
              let gitHubLink = results['items'][i]['html_url'];
              let liveLink = results['items'][i]['homepage'];
              let repo = new Repo(
                i + 1,
                name,
                description,
                language,
                date,
                gitHubLink,
                liveLink
              );
              this.ReposGotten.push(repo);
          }
          resolve ();

        },
        (error)=>{
          console.log(error);
          reject();
        }
        
      )

    })
    return promise;
  }


  constructor(private http: HttpClient) { }
}
