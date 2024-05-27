export const roundOff = (
	num: number,
	dec: string,
	conversionObject: { [key: string]: number },
	currency: string
) => {
	return (num * conversionObject[currency]).toLocaleString("en-IN", {
		maximumFractionDigits: parseInt(dec),
		style: "currency",
		currency: currency,
	});
};
