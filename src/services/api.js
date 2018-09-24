import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'aplication/vnd.github.v3+json',
    'User-Agent': 'github_explorer',
  },
});

export default api;
