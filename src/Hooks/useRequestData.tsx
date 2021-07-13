import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/api';

export const useRequestData = function <type>(
  path: string,
  initialState: type
): [data: type, getData: () => void] {
  const [data, setData] = useState<type>(initialState);
  const token = localStorage.getItem('token');

  const getData = () => {
    if (token) {
      axios
        .get(`${BASE_URL}${path}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => console.log(err.response && err.response.data.message));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, getData];
};
