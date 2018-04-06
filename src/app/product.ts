export class Product {
	id: string;
	label: string;
	stock: number;
	threshold: number;

	constructor(id?: string, label?: string, stock: number = 100, threshold: number = 60) {
		this.id = id || '000001';
		this.label = label || 'Eau 1.5L';
		this.stock = stock;
		this.threshold = threshold;
	}

	public get stockSafe(): boolean {
		return this.stock > this.threshold;
	}
}