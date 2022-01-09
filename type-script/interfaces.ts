interface Movie {
  title: string;
  year: number;
  rating?: number;
  resume?: string;
}

interface Trailer {
  title: string;
  url: string;
}

const StarWars: Movie = {
  title: "Star Wars",
  year: 1977,
  rating: 8.5,
  resume: "A long time ago in a galaxy far, far away...",
};

interface Trailer extends Movie {
  timeInSeconds: number;
  url: string;
}

const StarWarsTrailer: Trailer = {
  title: "Star Wars",
  year: 1977,
  timeInSeconds: 67,
  url: "https://www.youtube.com/watch?v=vZ734NWnAHA",
};

class TopMovie implements Movie {
  title: string;
  year: number;
  rating: number;
  constructor(title: string, year: number, rating: number) {
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
