import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchTerm: string = "";

  @Output() passSearchTerm = new EventEmitter<string>();

  submitSearch(){
    this.passSearchTerm.emit(this.searchTerm);
    this.searchTerm = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
