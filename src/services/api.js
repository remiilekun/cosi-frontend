import axios from 'axios';
import AppConfig from 'config/app.config';

const create = () => {
  const api = axios.create({
    baseURL: AppConfig.baseURL,
    timeout: 2000,
  });

  return {};
};

const api = create();

export default api;
