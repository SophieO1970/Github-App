import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { SearchUserService } from '../search-user-service/search-user.service';
import { SearchRepoService } from '../search-repo-service/search-repo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;

  constructor(
    public searchUserService: SearchUserService,
    public searchRepoService: SearchRepoService
  ) {}

  getUser(term: string) {
    this.searchUserService.getUsers(term).then(
      () => {
        this.user = this.searchUserService.usersGotten[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  ngOnInit(): void {
    this.getUser('SophieO1970');
  }

}
