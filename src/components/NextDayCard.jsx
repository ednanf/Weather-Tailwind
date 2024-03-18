import { useIcon } from '../hooks/useIcon';
import { useFormattedNumber } from '../hooks/useFormattedNumber';

function NextDayCard({ temperature, currentTempUnit, icon, weekDay }) {
	const formattedTemp = useFormattedNumber(Number(temperature));

	return (
		<div className="flex flex-col *:h-auto w-[70px] py-2 rounded-lg bg-slate-50 shadow-md">
			<div className="text-center">
				<p className="text-[18px]">{weekDay}</p>
				<span className="text-[30px] flex justify-center">{useIcon(icon)}</span>
				<p className="text-[13px]">{`${formattedTemp}º${currentTempUnit}`}</p>
			</div>
		</div>
	);
}

export default NextDayCard;
