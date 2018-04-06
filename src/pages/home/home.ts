import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StockManagementPage } from '../stock-management/stock-management';
import { ProductManagementPage } from '../product-management/product-management';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	marketValid: boolean

	constructor(public navCtrl: NavController) {
		this.marketValid = false;
	}

	canValidate(event) {
		this.marketValid = event.currentTarget.value.length === 5;
	}

	goToStock() {
		this.navCtrl.push(StockManagementPage);
	}
}
