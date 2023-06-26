const genreToRus = {
  horror: 'Ужасы',
  comedy: 'Комедия',
  fantasy: 'Фэнтези',
  action: 'Боевик'
} as const;

export type Genre = keyof typeof genreToRus;

export default function getGenreOnRus(genre: Genre) {
  return genreToRus[genre];
}