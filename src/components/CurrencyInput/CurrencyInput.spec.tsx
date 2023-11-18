import { fireEvent, render } from '@web/utils/test-utils/customRender';
import '@testing-library/jest-dom';

import { CurrencyInput } from './CurrencyInput';

describe('CurrencyInput', () => {
	const onChange = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});
	test('should render the component', () => {
		const { getByLabelText } = render(
			<CurrencyInput
				value=""
				onChange={onChange}
				label="Currency"
				placeholder="Enter currency"
				id="rtl-test"
			/>,
		);

		const inputElement = getByLabelText('Currency');

		expect(inputElement).toBeInTheDocument();
	});

	test('should call onChange function when input value changes', () => {
		const { getByLabelText } = render(
			<CurrencyInput
				value=""
				onChange={onChange}
				label="Currency"
				placeholder="Enter currency"
				id="rtl-test"
			/>,
		);

		const inputElement = getByLabelText('Currency');
		fireEvent.change(inputElement, { target: { value: '1000a000' } });

		expect(onChange).toHaveBeenCalledWith('1000000');
	});
});
