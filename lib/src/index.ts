import {useEffect, useState} from "react";

export type UseStatefulValue = <T>(defaultValue: T) => [value: T, setValue: (value: T) => void];

const useStatefulValue: UseStatefulValue = (defaultValue) => {
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	return [value, setValue];
}

export default useStatefulValue;
