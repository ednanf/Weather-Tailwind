import { WiDaySunny } from 'react-icons/wi';

//TODO: implement useIcon
function NextDayCard({ temperature = '--' }) {
	return (
		<div className="h-auto w-auto py-3 px-4 flex rounded-lg bg-slate-50 shadow-md mb-5">
			<div>
				<p>Mon</p>
				<WiDaySunny className="text-[2rem] font-black items-center justify-center text-center" />
				<p className="items-center justify-center text-center">{temperature}</p>
			</div>
		</div>
	);
}

export default NextDayCard;
