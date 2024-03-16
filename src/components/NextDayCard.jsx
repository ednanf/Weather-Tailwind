import { useIcon } from '../hooks/useIcon';

// TODO: add the days of the week dynamically

function NextDayCard({ temperature, icon }) {
	return (
		<div className="h-auto w-auto py-3 px-4 flex rounded-lg bg-slate-50 shadow-md mb-5">
			<div>
				<p>Mon</p>
				{useIcon(icon, 30)}
				<p className="items-center justify-center text-center">{temperature}</p>
			</div>
		</div>
	);
}

export default NextDayCard;
