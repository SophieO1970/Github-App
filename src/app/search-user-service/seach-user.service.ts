import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeachUserService {
  usersGotten: User[];

  getUsers(term: string){
    let endPoint = `https://api.github.com/search/users?access token=${environment.apiKey}&q=${term}`;
    let promise = new Promise((resolve, reject)=>{
      this.http
        .get(endPoint)
        .toPromise()
        .then(
          (results) =>{
            this.usersGotten = [];
            for (let i = 0; i < results['items'].length; i++) {
              let name = results['items'][i]['login'];
              let imagePath = results['items'][i]['avatar_url'];
              let reposUrl = results['items'][i]['repos_url'];
              let user = new User(i + 1, name, imagePath, reposUrl);
              this.usersGotten.push(user);
            }
            resolve();
          },
       (error)=>{
         console.log(error)
         reject()
       }
        );
      
    });
    return promise
  }

  constructor(private http: HttpClient) { }
}
