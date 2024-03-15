import {
	WiBarometer,
	WiThermometer,
	WiHumidity,
	WiStrongWind,
} from 'react-icons/wi';

function DetailsWidget() {
	return (
		<div className="w-[300px] h-auto py-5 px-2 flex rounded-lg bg-slate-50 shadow-md mb-5">
			<div className="font-roboto font-light flex flex-col">
				<p className="flex items-center">
					<WiThermometer className="text-[2rem] font-black items-center justify-center " />
					Feels like: 123
				</p>
				<p className="flex items-center justien">
					<WiBarometer className="text-[2rem] font-black items-center justify-center " />
					Pressure: 123
				</p>
				<p className="flex items-center">
					<WiHumidity className="text-[2rem] font-black items-center justify-center " />
					Humidity: 123
				</p>
				<p className="flex items-center">
					<WiStrongWind className="text-[2rem] font-black items-center justify-center " />
					Wind Speed: 123
				</p>
			</div>
		</div>
	);
}

export default DetailsWidget;
