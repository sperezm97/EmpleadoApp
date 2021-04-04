import axios from 'axios';

import { settings } from '../settings';

const instance = axios.create({
  baseURL: settings.apiKey,
});

instance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        'Ocp-Apim-Subscription-Key': settings.apiKey,
      },
    };
  },
  (error) => Promise.reject(error),
);

export { instance as api };
