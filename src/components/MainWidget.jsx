import { WiDaySunny } from 'react-icons/wi';

function MainWidget({ temperature, city }) {
	return (
		<div className="w-[300px] h-auto px-10 py-5 rounded-lg bg-slate-50 shadow-md mb-5">
			<div className="flex items-center justify-center mr-7">
				<WiDaySunny className="text-[100px] font-black" />
				<p className="text-[3rem] font-medium">
					{!temperature ? '--' : temperature}
				</p>
			</div>
			<p className="font-roboto font-thin text-4xl text-center">
				{!city ? '--' : city}
			</p>
			<div className="flex space-x-5 mt-3 justify-center font-thin">
				<p>Min: 123</p>
				<p>Max: 123</p>
			</div>
		</div>
	);
}

export default MainWidget;
