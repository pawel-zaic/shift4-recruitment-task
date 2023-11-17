import { ChangeEvent } from 'react';
import { useInput } from './useInput';

describe('useInput', () => {
	it('should allow only number input', () => {
		const { allowOnlyNumberInput } = useInput();

		const mockEvent = {
			target: {
				value: 'abc123',
			},
		};

		const result = allowOnlyNumberInput(
			mockEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		);

		expect(result).toBe('123');
	});
});
