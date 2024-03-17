import { useIcon } from '../hooks/useIcon';

function NextDayCard({ temperature, icon, weekDay }) {
	return (
		<div className="h-auto w-auto py-3 px-4 flex rounded-lg bg-slate-50 shadow-md mb-5">
			<div>
				<p className="text-[18px] text-center">{weekDay}</p>
				{useIcon(icon, '[30px]')}
				<p className="items-center justify-center text-center text-[13px]">
					{temperature}
				</p>
			</div>
		</div>
	);
}

export default NextDayCard;
