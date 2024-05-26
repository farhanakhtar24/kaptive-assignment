export const roundOff = (num: number, dec: string) => {
	return num.toLocaleString("en-IN", {
		maximumFractionDigits: parseInt(dec),
	});
};
