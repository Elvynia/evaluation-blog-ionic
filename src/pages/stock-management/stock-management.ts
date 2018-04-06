import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';

@Component({
	selector: 'page-stock-management',
	templateUrl: 'stock-management.html',
})
export class StockManagementPage {
	products: Array<Product>;

	constructor(public navCtrl: NavController, public navParams: NavParams,
		private productService: ProductProvider) {
		this.products = new Array();
	}

	ngOnInit() {
		this.refresh();
		// Utilisé pour debug/test.
		// this.products.push(new Product('00001', 'Chips barbecue', 150, 40));
	}

	updateStock(product: Product, quantity: number) {
		product.stock -= quantity;
		this.productService.update(product);
		this.refresh();
	}

	private refresh() {
		this.products = this.productService.getAll();
	}
}
