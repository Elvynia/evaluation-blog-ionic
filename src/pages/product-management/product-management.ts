import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { Product } from '../../app/product';
import { ProductProvider } from '../../providers/product/product';

@Component({
	selector: 'page-product-management',
	templateUrl: 'product-management.html',
})
export class ProductManagementPage {
	product: Product;

	constructor(public navCtrl: NavController, public navParams: NavParams,
		private productService: ProductProvider) {
		this.product = new Product();
	}

	create(form: NgForm) {
		let newArticle = new Product();
		newArticle.id = this.product.id;
		newArticle.label = this.product.label;
		newArticle.stock = this.product.stock;
		newArticle.threshold = this.product.threshold;
		try {
			this.productService.create(newArticle);
		} catch (e) {
			// TODO: popup confirm update si erreur car existe déjà.
			console.log(e);
		}
		form.resetForm(new Product());
	}

}
