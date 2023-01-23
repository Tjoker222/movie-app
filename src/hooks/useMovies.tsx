import { useNavigate } from "react-router-dom";
import { api, apiKey } from "../services/api";
import { CardMovie, MovieDetail } from "../types/movies";
import { useCallback } from "react";

interface TheMoviesDBResponse<T> {
  results: T;
}

export function useMovies() {
  const navigate = useNavigate();

  async function getMovies(): Promise<CardMovie[] | Error> {
    try {
      const response = await api.get<TheMoviesDBResponse<CardMovie[]>>(
        `movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
      );
      return response.data.results;
    } catch (error) {
      return new Error("Error loading movies");
    }
  }

  async function getMovieDetails(id: string): Promise<MovieDetail | Error> {
    try {
      const response = await api.get<MovieDetail>(
        `movie/${id}?api_key=${apiKey}&language=pt-BR`
      );
      return response.data;
    } catch (error) {
      return new Error("Error loading movie details");
    }
  }

  async function getSeries(): Promise<CardMovie[] | Error> {
    try {
      const response = await api.get<TheMoviesDBResponse<CardMovie[]>>(
        `tv/popular?api_key=${apiKey}&language=pt-BR&page=1`
      );
      return response.data.results;
    } catch (error) {
      return new Error("Error loading series");
    }
  }

  async function getSeriesDetails(id: string): Promise<MovieDetail | Error> {
    try {
      const response = await api.get<MovieDetail>(
        `tv/${id}?api_key=${apiKey}&language=pt-BR`
      );
      return response.data;
    } catch (error) {
      return new Error("Error loading serie details");
    }
  }

  const handleNavigateToDetails = useCallback(({ id }: { id: number }) => {
    const route = `/detail/${id}`;
    navigate(route);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getMovieDetails,
    getMovies,
    getSeries,
    getSeriesDetails,
    handleNavigateToDetails,
  };
}
