export class LogisticCenter{
	name: string;
	timezone: string;
	code: string;

	constructor(
		name: string, timezone: string, code: string) {
		this.name = name;
		this.timezone = timezone;
		this.code = code;
	}
}