import Button from './Button';

// TODO: setar as classes ativas como prop ao invés de deixar permanentemente, dessa forma da pra iniciar com um dos botões ativos

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
			>
				ºC
			</Button>
			<Button border="rounded-r-lg" side={'r'} onClick={changeSelectUnitsF}>
				ºF
			</Button>
		</div>
	);
}

export default ButtonGroup;
