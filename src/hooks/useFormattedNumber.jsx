export function useFormattedNumber(number) {
	const formattedNumber = Number(Number(number).toFixed(1));
	return formattedNumber;
}
