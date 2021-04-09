import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrlEnpoint: String = "https://5madgy2pye.execute-api.ap-south-1.amazonaws.com/catalog/search/suggestion";
  results;
  loading:boolean;

  constructor(private http:HttpClient) {
    this.results=[];
    this.loading=false;
   }


  getSuggestion(text:String){
      let apiUrl= `${this.apiUrlEnpoint}?lang=en&text=${text}&size=10`
      return  this.http.get(apiUrl)

  }
}
