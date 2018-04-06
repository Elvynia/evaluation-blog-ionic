export class Product {
	id: string;
	label: string;
	stock: number;
	threshold: number;

	public get stockSafe(): boolean {
		return this.stock > this.threshold;
	}
}