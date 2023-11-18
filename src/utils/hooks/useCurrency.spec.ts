import { useCurrency } from './useCurrency';

describe('useCurrency', () => {
	const { formatAsCurrency, parseCurrencyToNumber } = useCurrency();

	describe('formatAsCurrency', () => {
		it('should format a numeric value as currency', () => {
			expect(formatAsCurrency('1000')).toBe('1,000');
			expect(formatAsCurrency('1000.50')).toBe('1,000.50');
			expect(formatAsCurrency('1000000')).toBe('1,000,000');
			expect(formatAsCurrency('1000000.99')).toBe('1,000,000.99');
		});

		it('should handle empty string', () => {
			expect(formatAsCurrency('')).toBe('');
		});
	});

	describe('parseCurrencyToNumber', () => {
		it('should parse a currency value to a number', () => {
			expect(parseCurrencyToNumber('$1,000')).toBe(1000);
			expect(parseCurrencyToNumber('$1,000.50')).toBe(1000.5);
			expect(parseCurrencyToNumber('1,000,000')).toBe(1000000);
			expect(parseCurrencyToNumber('1,000,000.99')).toBe(1000000.99);
		});

		it('should handle empty string', () => {
			expect(parseCurrencyToNumber('')).toBe(0);
		});

		it('should handle invalid currency value', () => {
			expect(parseCurrencyToNumber('abc')).toBe(0);
		});
	});
});
