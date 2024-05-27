export const roundOff = (num: number, dec: string, currency: number) => {
	return (num * currency).toLocaleString("en-IN", {
		maximumFractionDigits: parseInt(dec),
		currency: "GBP",
	});
};
