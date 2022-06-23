import { api, apiKey } from "../services/api";
import {CardMovie, MovieDetail} from "../types/movies"

interface TheMoviesDBResponse<T>{
    results: T;
}

export function useMovies(){

    async function getMovies(): Promise<CardMovie[]|Error>{

        try {
            const response = await api.get<TheMoviesDBResponse<CardMovie[]>>(`movie/popular?api_key=${apiKey}&language=pt-BR&page=1`);
            return response.data.results;
    
        } catch (error) {
            return new Error("Error loading movies");
        }
    }

    async function getMovieDetails(id: string): Promise<MovieDetail|Error>{

        try {
            const response = await api.get<TheMoviesDBResponse<MovieDetail>>(`movie/${id}?api_key=${apiKey}&language=pt-BR`);
            return response.data.results;
    
        } catch (error) {
            return new Error("Error loading movie details");
        }
    }

    async function getSeries(): Promise<CardMovie[]|Error>{

        try {
            const response = await api.get<TheMoviesDBResponse<CardMovie[]>>(`tv/popular?api_key=${apiKey}&language=pt-BR&page=1`);
            return response.data.results;
    
        } catch (error) {
            return new Error("Error loading series");
        }
    }

    async function getSeriesDetails(id: string): Promise<MovieDetail|Error>{

        try {
            const response = await api.get<TheMoviesDBResponse<MovieDetail>>(`tv/${id}?api_key=${apiKey}&language=pt-BR`);
            return response.data.results;
    
        } catch (error) {
            return new Error("Error loading serie details");
        }
    }

    return{
        getMovieDetails,
        getMovies,
        getSeries,
        getSeriesDetails
    }


}

