import { fireEvent, render } from '@web/utils/test-utils/customRender';
import '@testing-library/jest-dom';

import { addMonths } from 'date-fns';

import { MonthPicker } from './MonthPicker';
describe('MonthPicker', () => {
	const handleChange = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders the label correctly', () => {
		// ARRANGE
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={new Date()} onChange={handleChange} />,
		);
		const label = getByLabelText('Month');

		// ACT

		// ASSERT
		expect(label).toBeInTheDocument();
	});

	it('calls handleChange with the previous month when the previous button is clicked', () => {
		// ARRANGE
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={addMonths(new Date(), 1)} onChange={handleChange} />,
		);
		const previousButton = getByLabelText('Previous');

		// ACT
		fireEvent.click(previousButton);

		// ASSERT
		expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
	});

	it("doesn't call handleChange with the previous month when the previous button is clicked and new value is in the past", () => {
		// ARRANGE
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={new Date()} onChange={handleChange} />,
		);
		const previousButton = getByLabelText('Previous');

		// ACT
		fireEvent.click(previousButton);

		// ASSERT
		expect(handleChange).not.toHaveBeenCalled();
	});

	it('calls handleChange with the next month when the next button is clicked', () => {
		// ARRANGE
		const { getByLabelText } = render(
			<MonthPicker label="Month" value={new Date()} onChange={handleChange} />,
		);
		const nextButton = getByLabelText('Next');

		// ACT
		fireEvent.click(nextButton);

		// ASSERT
		expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
	});
});
