import { fireEvent, render } from '@web/utils/test-utils/customRender';
import '@testing-library/jest-dom';

import { CurrencyInput } from './CurrencyInput';

describe('CurrencyInput', () => {
	const handleChange = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render the component', () => {
		// ARRANGE
		const { getByRole } = render(
			<CurrencyInput
				value=""
				onChange={handleChange}
				label="Currency"
				placeholder="Enter currency"
			/>,
		);

		const inputElement = getByRole('textbox', { name: /currency/i });

		// ACT

		// ASSERT
		expect(inputElement).toBeInTheDocument();
	});

	it('should call onChange function when input value changes', () => {
		// ARRANGE
		const { getByRole } = render(
			<CurrencyInput
				value=""
				onChange={handleChange}
				label="Currency"
				placeholder="Enter currency"
			/>,
		);

		const inputElement = getByRole('textbox', { name: /currency/i });

		// ACT
		fireEvent.change(inputElement, { target: { value: '1000a000' } });

		// ASSERT
		expect(handleChange).toHaveBeenCalledWith('1,000,000');
	});
});
