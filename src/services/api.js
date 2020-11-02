import axios from 'axios';

const create = () => {
  const api = axios.create({
    baseURL: 'https://app.fakejson.com/q',
  });

  return {
    checkIn: (data) =>
      api.post('/xXWFSwez', data, {
        params: {
          token: 'DHDIXKXq4ax9sPx_nTlbPQ',
        },
      }),
  };
};

const api = create();

export default api;
