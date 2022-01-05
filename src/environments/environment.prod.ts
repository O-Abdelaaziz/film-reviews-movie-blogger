export const environment = {
  production: true,
  BASE_IMAGES_URL_DEFAULT: 'https://image.tmdb.org/t/p/w500',
  BASE_IMAGES_URL_ORIGINAL: 'https://image.tmdb.org/t/p/original',
  env: {
    API_KEY: process.env["NG_APP_API_KEY"],
  },
};
