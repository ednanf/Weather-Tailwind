import { useIcon } from '../hooks/useIcon';
import { useFormattedNumber } from '../hooks/useFormattedNumber';

function MainWidget({ weatherData, currentUnit, location }) {
	const currentTemperature = useFormattedNumber(weatherData.main.temp);
	const minTemperature = useFormattedNumber(weatherData.main.temp_min);
	const maxTemperature = useFormattedNumber(weatherData.main.temp_max);

	return (
		<div className="w-[300px] h-auto py-5 rounded-lg bg-slate-50 shadow-md mb-5">
			<div className="flex items-center justify-center mr-7">
				<span className="text-[100px]">
					{useIcon(weatherData.weather[0].id)}
				</span>
				<p className="text-[3rem] font-medium">
					{!weatherData.main.temp
						? '--'
						: `${currentTemperature}º${currentUnit}`}
				</p>
			</div>
			<p className="font-roboto font-thin text-4xl text-center">
				{!location ? '--' : location}
			</p>
			<div className="flex space-x-5 mt-3 justify-center font-thin">
				<p>
					Low:{' '}
					{!weatherData.main.temp_min
						? '--'
						: `${minTemperature}º${currentUnit}`}
				</p>
				<p>
					High:{' '}
					{!weatherData.main.temp_max
						? '--'
						: `${maxTemperature}º${currentUnit}`}
				</p>
			</div>
		</div>
	);
}

export default MainWidget;
