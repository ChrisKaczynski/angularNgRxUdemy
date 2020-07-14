import { Component } from '@angular/core';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})

export class ProductsComponent {
    productName= 'A Book';
    isDisabled= true;
    products = ['A book', 'A Tree']
    
    constructor() {
        setTimeout(()=> {
            this.isDisabled = false;
        },3000)
    }

    onAddProduct(form){
        
        if ( form.valid) {
            this.products.push(form.value.productName)
        }
    }

    onRemoveProduct(productName: string){
        this.products = this.products.filter(p => p !== productName);
    
      }
}