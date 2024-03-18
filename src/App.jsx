import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar';
import MainWidget from './components/MainWidget';
import DetailsWidget from './components/DetailsWidget';
import NextDayCard from './components/NextDayCard';
import ButtonGroup from './components/ButtonGroup';

// API KEY
import { WEATHER_KEY } from './support/KEY';

// TODO: make API field component and remove my own key
// TODO: apply useFormattedNumber to forecast cards -> they receive NaN for some reason

function App() {
	const [fetched, setFetched] = useState(false);

	const [nextDaysOfWeek, setNextDaysofWeek] = useState([]);

	const [units, setUnits] = useState('metric');

	// Used to set coordinates *and* pass the city name - weather API is wrong sometimes
	const [coordinates, setCoordinates] = useState({
		lat: null,
		lon: null,
		city: null,
	});

	const [currentWeatherData, setCurrentWeatherData] = useState({
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

	const [weatherForecast, setWeatherForecast] = useState([
		{ temp: 0, id: 0 },
		{ temp: 0, id: 0 },
		{ temp: 0, id: 0 },
		{ temp: 0, id: 0 },
	]);

	// Triggers fetching when any state changes
	useEffect(() => {
		async function fetchData() {
			// Avoid calling the API without data
			if (!coordinates.lat || !coordinates.lon) {
				return;
			}

			// Current weather call
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${units}&appid=${WEATHER_KEY}`
				);

				if (!response.ok) {
					throw new Error('Error fetching current weather data!');
				}

				const data = await response.json();

				setCurrentWeatherData({
					...data,
				});
			} catch (error) {
				console.error(error);
			}

			// Weather forecast call
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${WEATHER_KEY}`
				);

				if (!response.ok) {
					throw new Error('Error fetching forecast data!');
				}

				const forecastData = await response.json();

				// The array numbers are due to how the API returns results with 3h intervals
				setWeatherForecast([
					{
						temp: forecastData.list[9].main.temp_max,
						id: forecastData.list[9].weather[0].id,
					},
					{
						temp: forecastData.list[17].main.temp_max,
						id: forecastData.list[17].weather[0].id,
					},
					{
						temp: forecastData.list[25].main.temp_max,
						id: forecastData.list[25].weather[0].id,
					},
					{
						temp: forecastData.list[33].main.temp_max,
						id: forecastData.list[33].weather[0].id,
					},
				]);
			} catch (error) {
				console.error(error);
			}

			if (!fetched) {
				setFetched(true);
			}
		}

		getNextFourDays();
		fetchData();
	}, [coordinates, units, fetched]);

	// Receives latitude and longitude from the search query (from handleChange)
	function handleSearch(searchData) {
		setCoordinates({
			lat: searchData.lat,
			lon: searchData.lon,
			city: searchData.city,
		});
	}

	// Sets the next 4 days of the week
	function getNextFourDays() {
		const today = new Date();
		const days = [];

		for (let i = 0; i < 4; i++) {
			today.setDate(today.getDate() + 1);
			days.push(
				Intl.DateTimeFormat('en-US', { weekday: 'short' })
					.format(today)
					.slice(0, 3)
			);
		}

		setNextDaysofWeek(days);
	}

	function handleUnitsChangeF() {
		if (units === 'metric') {
			setUnits('imperial');
		}
	}

	function handleUnitsChangeC() {
		if (units === 'imperial') {
			setUnits('metric');
		}
	}

	function cOrF() {
		return units === 'imperial' ? 'F' : 'C';
	}

	return (
		<div className="h-screen w-screen bg-gradient-to-b from-sky-400 to-sky-50 flex items-center justify-center">
			<div className="flex flex-col">
				<div className="w-[500]">
					<SearchBar onSearchChange={handleSearch} />
				</div>
				<MainWidget
					weatherData={currentWeatherData}
					location={coordinates.city}
					currentUnit={cOrF()}
				/>
				<DetailsWidget
					weatherData={currentWeatherData}
					currentUnit={units}
					currentTempUnit={cOrF()}
				/>
				<div className="flex space-x-1.5 mb-5">
					<NextDayCard
						temperature={weatherForecast[0].temp}
						icon={weatherForecast[0].id}
						weekDay={nextDaysOfWeek[0]}
						currentTempUnit={cOrF()}
					/>
					<NextDayCard
						temperature={weatherForecast[1].temp}
						icon={weatherForecast[1].id}
						weekDay={nextDaysOfWeek[1]}
						currentTempUnit={cOrF()}
					/>
					<NextDayCard
						temperature={weatherForecast[2].temp}
						icon={weatherForecast[2].id}
						weekDay={nextDaysOfWeek[2]}
						currentTempUnit={cOrF()}
					/>
					<NextDayCard
						temperature={weatherForecast[3].temp}
						icon={weatherForecast[3].id}
						weekDay={nextDaysOfWeek[3]}
						currentTempUnit={cOrF()}
					/>
				</div>
				<div className="flex justify-center">
					<ButtonGroup
						selectedUnits={units}
						changeSelectUnitsF={handleUnitsChangeF}
						changeSelectUnitsC={handleUnitsChangeC}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
