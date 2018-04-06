import { Injectable } from '@angular/core';

import { Product } from '../../app/product';

@Injectable()
export class ProductProvider {
	private products: Array<Product>;

	constructor() {
		this.products = new Array();
	}

	public getAll(): Array<Product> {
		return this.products;
	}

	public create(product: Product) {
		if (this.exists(product.id)) {
			throw new Error('Cannot create a new product with existing id ' + product.id);
		} else {
			this.products.push(product);
		}
	}

	public read(id: string): Product {
		return this.products.find((p: Product) => p.id === id);
	}

	public update(product: Product) {
		if (this.exists) {
			this.products.splice(this.getIndex(product.id), 1, product);
		} else {
			throw new Error('Cannot update product with unknown id ' + product.id);
		}
	}

	public delete(id: string) {
		if (this.exists) {
			this.products.splice(this.getIndex(id), 1);
		} else {
			throw new Error('Cannot delete product with unknown id ' + id);
		}
	}

	private exists(id: string): boolean {
		return this.getIndex(id) >= 0;
	}

	private getIndex(id: string): number {
		return this.products.findIndex((p: Product) => p.id === id);
	}
}
