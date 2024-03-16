import { useIcon } from '../hooks/useIcon';

function MainWidget({ weatherData, location }) {
	return (
		<div className="w-[300px] h-auto px-10 py-5 rounded-lg bg-slate-50 shadow-md mb-5">
			<div className="flex items-center justify-center mr-7">
				{useIcon(weatherData.weather[0].id)}
				<p className="text-[3rem] font-medium">
					{!weatherData.main.temp
						? '--'
						: `${weatherData.main.temp.toFixed(0)}º`}
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
						: `${weatherData.main.temp_min.toFixed(0)}º`}
				</p>
				<p>
					High:{' '}
					{!weatherData.main.temp_max
						? '--'
						: `${weatherData.main.temp_max.toFixed(0)}º`}
				</p>
			</div>
		</div>
	);
}

export default MainWidget;
