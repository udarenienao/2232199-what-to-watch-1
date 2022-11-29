export type Film ={
  id: number;
  name: string;
  posterImage: string;
  backgroundImage: string;
  genre: string;
  released: number;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  description: string;
  videoLink: string;
  runTime: string;
  reviews: FilmReview[];
};

export type FilmReview = {
  id: number,
  rating: number,
  author: string,
  date: string,
  text: string
};

