import { Genre } from "@/helpers/getGenreOnRus";

export default interface IFilm {
  id: string,
  title: string,
  posterUrl: string,
  genre: Genre,
  description: string,
  director: string,
  releaseYear: number,
  rating: number,
  reviewIds: string[] | never[]
};