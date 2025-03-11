import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 constructor(private _product:ProductService) {}

  searchInput(event:any){
    this._product.searchValue.next(event.value)
  }
}
