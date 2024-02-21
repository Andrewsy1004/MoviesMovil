import { HttpAdapter } from "../../../config/config";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
  page?: number;
  limit?: number;
}

export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter, options?: Options  ):Promise<Movie[]> => {
    try {
      const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming',{
        params:{
          page: options?.page,
          limit: options?.limit
        }
      });
      return upcoming.results.map(  MovieMapper.fromMovieDBResultToEntity );
  
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching movies - UpcomingUseCase');
    }  
}