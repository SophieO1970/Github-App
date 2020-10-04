import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user'
import { SearchUserService} from '../search-user-service/search-user.service'
import { SearchRepoService } from '../search-repo-service/search-repo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: User[];

  constructor( public searchUserService: SearchUserService,) { }

  ngOnInit(): void {
  }

}
