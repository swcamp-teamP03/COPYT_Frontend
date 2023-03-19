import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constants/api';

const Redirect = () => {
  const param = useParams();
  const { url } = param;

  useEffect(() => {
    if (url) {
      window.location.href = `${BASE_URL}/redirect/${url}`;
    }
  }, [url]);

  return <></>;
};

export default Redirect;
