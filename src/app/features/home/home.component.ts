import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Product } from "src/app/core/model/Products";
import { ProductService } from "src/app/core/service/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  errorMessage!: string;
  successMessage!: string;
  Products!: Product[];

  constructor(
    private _product: ProductService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getAllProducts();
    this._product.searchValue.subscribe((value: any) => {
      console.log(value);
      if (value) {
        this.Products.filter((product) => {
          return product.title.toLowerCase().includes(value.toLowerCase());
        });
        console.log(this.Products);
      }
    });
  }

  getAllProducts() {
    this._spinner.show();
    setTimeout(() => {
      this._product.getAllProducts().subscribe(
        (res: any) => {
          console.log(res);
          this.Products = res;
          this.successMessage = " Welcome to our store ";
          this._spinner.hide();
          setTimeout(() => {
            this.successMessage = "";
          }, 2000);
        },
        (err: any) => {
          this._spinner.hide();
          this.errorMessage = "OPPS! Something went wrong ";
          setTimeout(() => {
            this.errorMessage = "";
          }, 2000);
        }
      );
    }, 1000);
  }
}
