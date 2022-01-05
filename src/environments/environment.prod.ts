export const environment = {
  production: true,
  BASE_IMAGES_URL_DEFAULT: 'https://image.tmdb.org/t/p/w500',
  BASE_IMAGES_URL_ORIGINAL: 'https://image.tmdb.org/t/p/original',
  MOVIE_DB_BASE_URL:'https://api.themoviedb.org/3',
  env: {
    API_KEY: process.env["NG_APP_API_KEY"],
  },
};
