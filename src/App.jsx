import { useEffect, useState } from 'react';

import DetailsWidget from './components/DetailsWidget';
import MainWidget from './components/MainWidget';
import NextDayCard from './components/NextDayCard';
import SearchBar from './components/SearchBar';

// API KEY
import { WEATHER_KEY } from './support/KEY';

// TODO: make C or F option and pass it along to the components
// TODO: make API field component and remove my own key

function App() {
	const [coordinates, setCoordinates] = useState({
		lat: null,
		lon: null,
	});

	const [weatherData, setWeatherData] = useState({
		weather: {
			0: {
				id: 0,
				main: '',
				description: '',
			},
		},
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0,
		},
		wind: {
			speed: 0,
		},
		name: '',
	});

	async function fetchData() {
		// Avoid calling the API without data
		if (!coordinates.lat || !coordinates.lon) {
			return;
		}

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${WEATHER_KEY}`
			);

			if (!response.ok) {
				throw new Error('Error fetching data!');
			}

			const data = await response.json();

			setWeatherData({
				...data,
			});
		} catch (error) {
			console.error(error);
		}
	}

	// Triggers fetching when any state changes
	useEffect(() => {
		fetchData();
	});

	// Receives latitude and longitude from the search query
	function handleSearch(searchData) {
		setCoordinates({
			lat: searchData.lat,
			lon: searchData.lon,
		});
	}

	return (
		<div className="h-screen w-screen bg-gradient-to-b from-sky-400 to-sky-50 flex items-center justify-center">
			<div className="flex flex-col">
				<div className="w-[500]">
					<SearchBar onSearchChange={handleSearch} />
				</div>
				<MainWidget
					temperature={weatherData.main.temp}
					city={weatherData.name}
				/>
				<DetailsWidget />
				<div className="flex space-x-2 justify-center">
					<NextDayCard />
					<NextDayCard />
					<NextDayCard />
					<NextDayCard />
				</div>
			</div>
		</div>
	);
}

export default App;
