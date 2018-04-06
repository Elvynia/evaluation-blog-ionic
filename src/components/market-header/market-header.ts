import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StockManagementPage } from '../../pages/stock-management/stock-management';
import { ProductManagementPage } from '../../pages/product-management/product-management';

@Component({
	selector: 'market-header',
	templateUrl: 'market-header.html'
})
export class MarketHeaderComponent {
	@Input() title: string;

	constructor(private navCtrl: NavController) { }

	navigate(toStock: boolean) {
		let nextPage: any;
		if (toStock) {
			nextPage = StockManagementPage;
		} else {
			nextPage = ProductManagementPage;
		}
		this.navCtrl.push(nextPage);
	}
}
