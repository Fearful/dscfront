export class CountLog {
	location: string;
	user: string;
	item: string;
	fullPallets: string;
	partialPallets: string;
	countResult: string;

	constructor(
		location: string, user: string, item: string,
		fullPallets: string, partialPallets: string, countResult: string) {
		this.location = location;
		this.user = user;
		this.item = item;
		this.fullPallets = fullPallets;
		this.partialPallets = partialPallets;
		this.countResult = countResult;
	}
}