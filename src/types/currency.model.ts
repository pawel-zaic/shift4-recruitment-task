export type OCurrencyType = 'usd' | 'gbp' | 'eur' | 'btc' | 'jpy';

export const OCurrencyName: Record<OCurrencyType, string> = {
	usd: 'Dollars',
	gbp: 'Pounds',
	eur: 'Euro',
	btc: 'Bitcoin',
	jpy: 'Yen',
};

export type CurrencyNameType = (typeof OCurrencyName)[keyof typeof OCurrencyName];

export const isCurrencyNameType = (value: string): value is CurrencyNameType =>
	Object.values(OCurrencyName).includes(value as CurrencyNameType);
