import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'aplicatiob/vnd.github.v3+json',
    'User-Agent': 'github_explorer',
  },
});

export default api;
