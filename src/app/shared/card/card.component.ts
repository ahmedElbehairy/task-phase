import { Component, Input, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/core/model/Products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cards!:Product[]
  numberOfCards:number = 9
  lodding:boolean = false
 constructor() {}

 ngOnChanges(changes:SimpleChanges):void {
  if(changes['cards'].currentValue?.length > 0){
    this.data()
    this.lodding = true
  }
 }
 data():Product[] {
  return this.cards.slice(0, this.numberOfCards)
 }
 showMore(){
  this.numberOfCards += 9
  if(this.numberOfCards > this.cards.length){
    console.log(this.cards.length  );
    this.numberOfCards = this.cards.length  
  }

 }
 showLess(){
    this.numberOfCards = 9
 }
}
