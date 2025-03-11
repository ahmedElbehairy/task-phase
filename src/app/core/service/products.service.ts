import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  public searchValue = new BehaviorSubject<boolean>(false);
  issearch$ = this.searchValue.asObservable();

  constructor(private _http: HttpClient) {}
  getAllProducts() {
    return this._http.get(`https://dev.to/api/articles`);
  }
  


}
