export const useInput = () => {
	const allowOnlyNumberInput = (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		value.target.value.replace(/[^0-9.]/g, '');

	return { allowOnlyNumberInput };
};
