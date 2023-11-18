export const useCurrency = () => {
	const formatAsCurrency = (numericValue: string) => {
		const parts = numericValue.split('.');
		const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		let formattedValue = integerPart;

		if (parts.length > 1) {
			formattedValue += '.' + parts[1].slice(0, 2);
		}

		return formattedValue;
	};

	const parseCurrencyToNumber = (currencyValue: string): number => {
		const numericValue = currencyValue.replace(/[$,]/g, '');
		const parsedValue = parseFloat(numericValue);

		return isNaN(parsedValue) ? 0 : parsedValue;
	};

	return { formatAsCurrency, parseCurrencyToNumber };
};
