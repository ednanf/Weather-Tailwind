import { useIcon } from '../hooks/useIcon';

function NextDayCard({ temperature, icon, weekDay }) {
	return (
		<div className="h-auto w-[70px] py-3 px-4 flex rounded-lg bg-slate-50 shadow-md mb-5 text-center justify-center items-center">
			<div>
				<p className="text-[18px] text-center justify-center items-center">
					{weekDay}
				</p>
				<span className="text-[30px] text-center justify-center items-center">
					{useIcon(icon)}
				</span>
				<p className="items-center justify-center text-center text-[13px]">
					{temperature}
				</p>
			</div>
		</div>
	);
}

export default NextDayCard;
