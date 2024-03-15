import { WiDaySunny } from 'react-icons/wi';

function MainWidget({ weatherData }) {
	return (
		<div className="w-[300px] h-auto px-10 py-5 rounded-lg bg-slate-50 shadow-md mb-5">
			<div className="flex items-center justify-center mr-7">
				<WiDaySunny className="text-[100px] font-black" />
				<p className="text-[3rem] font-medium">
					{!weatherData.main.temp ? '--' : weatherData.main.temp}
				</p>
			</div>
			<p className="font-roboto font-thin text-4xl text-center">
				{!weatherData.name ? '--' : weatherData.name}
			</p>
			<div className="flex space-x-5 mt-3 justify-center font-thin">
				<p>
					Min: {!weatherData.main.temp_min ? '--' : weatherData.main.temp_min}
				</p>
				<p>
					Max: {!weatherData.main.temp_max ? '--' : weatherData.main.temp_max}
				</p>
			</div>
		</div>
	);
}

export default MainWidget;
