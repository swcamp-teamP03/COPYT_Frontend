import { useState } from 'react';

const useError = <T extends object>(initialState: T): [T, <P extends keyof T>(target: P, message: string) => string] => {
  const [isError, setIsError] = useState(initialState);

  const setError = <P extends keyof T>(target: P, message: string) => {
    if (!target) {
      setIsError((pre) => ({ ...pre, [target]: '최소 1글자 이상 입력해 주세요.' }));
      return message;
    }
    setIsError((pre) => ({ ...pre, [target]: message }));
    return message;
  };

  return [isError, setError];
};

export default useError;
