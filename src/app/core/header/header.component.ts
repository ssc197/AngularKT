import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import {SearchService} from "../../services/search.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loading:boolean=false;
  searchField: FormControl;
  suggestionList:Observable<any>;
  constructor(
    private search: SearchService
  ) {

   }

  ngOnInit(): void {
    this.searchField = new FormControl();
   this.searchField.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged()
        )
      .subscribe(text => {
        this.doSuggestion(text);
        // this.searches.push(term);
      })
  }

  doSuggestion(text:String){
    this.loading=true;
    this.suggestionList = this.search.getSuggestion(text)
    this.loading=false;
  }

}
