import { RefObject, useCallback, useEffect, useState } from 'react';

export const useFocusableElement = (focusableElementRef: RefObject<HTMLElement | null>) => {
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		const focusableElement = focusableElementRef.current;
		if (focusableElement) {
			focusableElement.tabIndex = 0;
			focusableElement.addEventListener('focus', handleFocus);
			focusableElement.addEventListener('blur', handleBlur);

			return () => {
				focusableElement.removeEventListener('focus', handleFocus);
				focusableElement.removeEventListener('blur', handleBlur);
			};
		}
	}, [focusableElementRef]);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, [setIsFocused]);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
	}, [setIsFocused]);

	return {
		isFocused,
	};
};
