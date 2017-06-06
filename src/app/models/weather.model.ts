export class WeatherModel {
	
	constructor(
		public geocoords: string,
		public city: string,
		public temp: number,
		public windspeed: number,
		public description: string,
		public icon: string
	){}

}