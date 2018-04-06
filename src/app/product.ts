export class Product {
	id: string;
	label: string;
	stock: number;
	threshold: number;

	constructor(id?: string, label?: string, stock: number = 0, threshold: number = 0) {
		this.id = id;
		this.label = label;
		this.stock = stock;
		this.threshold = threshold;
	}

	public get stockSafe(): boolean {
		return this.stock > this.threshold;
	}
}