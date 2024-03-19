const SEARCH_KEY = import.meta.env.VITE_SEARCH_KEY;

export const GEO_API_URL =
	'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000&';

export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': SEARCH_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};
