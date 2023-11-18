import { fireEvent, render } from '@web/utils/test-utils/customRender';
import '@testing-library/jest-dom';

import { addMonths } from 'date-fns';

import { MonthPicker } from './MonthPicker';
describe('MonthPicker', () => {
	const handleChange = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders the label correctly', () => {
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={new Date()} id="month-picker" onChange={handleChange} />,
		);
		const label = getByLabelText('Month');
		expect(label).toBeInTheDocument();
	});

	test('calls handleChange with the previous month when the previous button is clicked', () => {
		const { getByLabelText } = render(
			<MonthPicker
				label="Month"
				value={addMonths(new Date(), 1)}
				id="month-picker"
				onChange={handleChange}
			/>,
		);
		const previousButton = getByLabelText('previous');
		fireEvent.click(previousButton);
		expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
	});

	test("doesn't call handleChange with the previous month when the previous button is clicked and new value is in the past", () => {
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={new Date()} id="month-picker" onChange={handleChange} />,
		);
		const previousButton = getByLabelText('previous');
		fireEvent.click(previousButton);
		expect(handleChange).not.toHaveBeenCalled();
	});

	test('calls handleChange with the next month when the next button is clicked', () => {
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={new Date()} id="month-picker" onChange={handleChange} />,
		);
		const nextButton = getByLabelText('next');
		fireEvent.click(nextButton);
		expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
	});
});
