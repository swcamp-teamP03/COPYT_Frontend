import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

const useForm = <T extends object = object>(
  initalState: T,
): [T, (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState(initalState);

  const getValue = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return event.target.value;
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: getValue(event),
    }));
  }, []);

  return [state, getValue, handleChange, setState];
};

export default useForm;
