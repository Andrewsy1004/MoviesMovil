import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '4693fc1a07f620dd13eeed4b994fa7b4',
    // language: 'es'
    api_key: THE_MOVIE_DB_KEY ?? 'NO KEY',  

  }
});