export function useFormattedNumber(number) {
	// HACK: ugly but works
	const formattedNumber = Number(Number(number).toFixed(1));
	return formattedNumber;
}
