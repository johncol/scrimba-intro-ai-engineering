import fs from "fs";

const MOVIE_DELIMITER = "<<MOVIE>>";

export const getMoviesDataFromFile = () => {
  const data = fs.readFileSync("./raw-data/movies-2025.text", "utf-8");
  return data
    .split(MOVIE_DELIMITER)
    .map((movie) => movie.trim());
};
