import {
	WiBarometer,
	WiThermometer,
	WiHumidity,
	WiStrongWind,
} from 'react-icons/wi';

function DetailsWidget({ weatherData }) {
	return (
		<div className="w-[300px] h-auto py-5 px-2 flex rounded-lg bg-slate-50 shadow-md mb-5">
			<div className="font-roboto font-light flex flex-col">
				<p className="flex items-center">
					<WiThermometer className="text-[2rem] font-black items-center justify-center " />
					Feels like:{' '}
					{!weatherData.main.feels_like ? '--' : weatherData.main.feels_like}
				</p>
				<p className="flex items-center justien">
					<WiBarometer className="text-[2rem] font-black items-center justify-center " />
					Pressure:{' '}
					{!weatherData.main.pressure ? '--' : weatherData.main.pressure} hPa
				</p>
				<p className="flex items-center">
					<WiHumidity className="text-[2rem] font-black items-center justify-center " />
					Humidity:{' '}
					{!weatherData.main.humidity ? '--' : weatherData.main.humidity}%
				</p>
				<p className="flex items-center">
					<WiStrongWind className="text-[2rem] font-black items-center justify-center " />
					Wind Speed: {!weatherData.wind.speed ? '--' : weatherData.wind.speed}
				</p>
			</div>
		</div>
	);
}

export default DetailsWidget;
