import { GEO_KEY } from './KEY';

export const GEO_API_URL =
	'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000&';

export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': GEO_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};
