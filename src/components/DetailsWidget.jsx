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
					{!weatherData.main.feels_like
						? '--'
						: `${weatherData.main.feels_like.toFixed(1)}º`}
				</p>
				<p className="flex items-center justien">
					<WiBarometer className="text-[2rem] font-black items-center justify-center " />
					Pressure:{' '}
					{!weatherData.main.pressure
						? '--'
						: `${weatherData.main.pressure.toFixed(1)} hPa`}
				</p>
				<p className="flex items-center">
					<WiHumidity className="text-[2rem] font-black items-center justify-center " />
					Humidity:{' '}
					{!weatherData.main.humidity
						? '--'
						: `${weatherData.main.humidity.toFixed(0)}%`}
				</p>
				<p className="flex items-center">
					<WiStrongWind className="text-[2rem] font-black items-center justify-center " />
					Wind Speed:{' '}
					{!weatherData.wind.speed ? '--' : `${weatherData.wind.speed} m/s`}
				</p>
			</div>
		</div>
	);
}

export default DetailsWidget;
