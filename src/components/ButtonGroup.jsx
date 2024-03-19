import Button from './Button';

function ButtonGroup({
	selectedUnits,
	changeSelectUnitsF,
	changeSelectUnitsC,
}) {
	return (
		<div className="bg-slate-50 rounded-lg shadow-md">
			<Button
				border="border-r-[1px] rounded-l-lg border-slate-300"
				side={'l'}
				onClick={changeSelectUnitsC}
				isActive={selectedUnits === 'metric' ? 'text-blue-500' : ''}
			>
				ºC
			</Button>
			<Button
				border="rounded-r-lg"
				side={'r'}
				onClick={changeSelectUnitsF}
				isActive={selectedUnits === 'imperial' ? 'text-blue-500' : ''}
			>
				ºF
			</Button>
		</div>
	);
}

export default ButtonGroup;
