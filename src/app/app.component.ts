import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
@Output() search = new EventEmitter<string>()
 constructor(public _Router:Router){}
 searchInput(event:any){
  this.search.emit(event)   
 }
}


