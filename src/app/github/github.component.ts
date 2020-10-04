import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user'
import { SearchUserService} from '../search-user-service/search-user.service'
import { SearchRepoService } from '../search-repo-service/search-repo.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: User[];
  repos: Repo[];
  usersLength: number;
  reposLength: number;


  constructor( 
    public searchUserService: SearchUserService,
    public searchRepoService: SearchRepoService) { }


    search(term: string) {
      this.searchUserService.getUsers(term).then(
        () => {
          this.users = this.searchUserService.usersGotten;
          this.usersLength = this.searchUserService.usersGotten.length;
        },
        (error) => {
          console.log(error);
        }
      );
      this.searchRepoService.getRepos(term).then(
        () => {
          this.repos = this.searchRepoService.ReposGotten;
          this.reposLength = this.searchRepoService.ReposGotten.length;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  

  ngOnInit(): void {
    this.search('sophie');
  }

}
