import { Component, OnInit, Input } from '@angular/core';
import { SearchRepoService } from '../search-repo-service/search-repo.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  @Input() user: User;
  repos: Repo[];

  constructor(private searchRepoService: SearchRepoService) { }



  getUserRepos(endpoint) {
    this.searchRepoService.getUserRepos(endpoint).then(
      () => {
        this.repos = this.searchRepoService.userRepos;
        console.log(this.repos.length)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getUserRepos(this.user.reposUrl);
  }

}
