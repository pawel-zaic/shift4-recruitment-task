import { set } from 'date-fns';

import { render, fireEvent, within, act } from '@web/utils/test-utils/customRender';
import '@testing-library/jest-dom';

import { DonationDialog } from './DonationDialog';

describe('DonationDialog', () => {
	beforeAll(() => {
		const today = set(new Date(), {
			year: 2023,
			month: 10,
			date: 18,
			hours: 12,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
		});
		jest.useFakeTimers({ now: today });
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	const handleClose = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});
	it('should render the dialog with the correct title and subtitle', () => {
		// ARRANGE
		const { getByText } = render(
			<DonationDialog keyId="rtl-test" open={true} handleClose={handleClose} />,
		);
		const title = getByText('The giving block');
		const subtitle = getByText('Set up your donation goal!');

		// ASSERT
		expect(title).toBeInTheDocument();
		expect(subtitle).toBeInTheDocument();
	});

	it('should call handleClose when close button is clicked', () => {
		// ARRANGE
		const { getByRole } = render(
			<DonationDialog keyId="rtl-test" open={true} handleClose={handleClose} />,
		);
		const closeButton = getByRole('button', { name: /close/i });

		// ACT
		fireEvent.click(closeButton);

		// ASSERT
		expect(handleClose).toHaveBeenCalled();
	});

	it('should properly calculate the donation', () => {
		// ARRANGE
		const { getByRole, getByLabelText, getByText } = render(
			<DonationDialog keyId="rtl-test" open={true} handleClose={handleClose} />,
		);

		const valueInput = getByRole('textbox', { name: /i can donate/i });
		const totalAmountValue = getByText('Total amount').nextElementSibling;
		const dateInput = getByLabelText('Every month until');
		const nextButton = within(dateInput).getByLabelText('Next');

		// ACT
		fireEvent.change(valueInput, { target: { value: '100' } });
		fireEvent.click(nextButton);
		fireEvent.click(nextButton);

		// ASSERT
		expect(totalAmountValue).toHaveTextContent('$200');
		expect(getByText(/You will be sending/)).toBeInTheDocument();
		expect(getByText(/\$100/)).toBeInTheDocument();
		expect(getByText(/every month, until/)).toBeInTheDocument();
		expect(getByText(/January 2024/)).toBeInTheDocument();
		expect(getByText(/Thank you!/)).toBeInTheDocument();
	});
	it('should console.log() the result when the submit button is clicked', async () => {
		// ARRANGE
		const logSpy = jest.spyOn(global.console, 'log');

		const { getByRole, getByLabelText } = render(
			<DonationDialog keyId="rtl-test" open={true} handleClose={handleClose} />,
		);

		const submitButton = getByRole('button', { name: /continue/i });
		const valueInput = getByRole('textbox', { name: /i can donate/i });
		const dateInput = getByLabelText('Every month until');
		const nextButton = within(dateInput).getByLabelText('Next');

		// ACT
		fireEvent.change(valueInput, { target: { value: '100.50' } });
		fireEvent.click(nextButton);
		fireEvent.click(nextButton);
		fireEvent.click(nextButton);

		await act(() => {
			fireEvent.click(submitButton);
		});

		// ASSERT
		expect(logSpy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenCalledWith({ monthlyAmount: 100.5, lastMonth: 'February 2024' });

		logSpy.mockRestore();
	});
});
