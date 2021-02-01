const games = [
  {
    id: 1,
    game: 'Among Us',
    image: 'among-us',
    video: 'https://youtu.be/ZHhk0dDJwBM',
    genres: [
      { id: 1, label: 'Action' },
      { id: 2, label: 'Arcade' },
    ],
    description:
      'Games multiplayer yang dikembangkan dan dipublikasikan oleh studio permainan asal Amerika Serikat, InnerSloth, dan dirilis pada tanggal 15 Juni 2018.',
    isPlayed: false,
  },
  {
    id: 2,
    game: 'Mobile Legends',
    image: 'mobile-legends',
    video: 'https://youtu.be/cftqT7au9gk',
    genres: [
      { id: 1, label: 'Action' },
      { id: 3, label: 'Strategy' },
    ],
    description:
      'Games yang bergerak berjenis MOBA yang dikembangkan dan diterbitkan oleh Moonton.',
    isPlayed: false,
  },
  {
    id: 3,
    game: 'PUGB Mobile',
    image: 'pubg-mobile',
    video: 'https://youtu.be/_LTiEXMc5J0',
    genres: [
      { id: 1, label: 'Action' },
      { id: 4, label: 'RPG' },
    ],
    description:
      'Games dengan genre battle royale, yang para pemainnya bisa bermain dengan 100 orang sekaligus secara daring.',
    isPlayed: false,
  },
  {
    id: 4,
    game: 'Call Of Duty Mobile',
    image: 'cod-mobile',
    video: 'https://youtu.be/BjiaMBk6rHk',
    genres: [
      { id: 1, label: 'Action' },
      { id: 4, label: 'RPG' },
    ],
    description:
      'Games video tembak-menembak orang-pertama gratis yang dikembangkan oleh Tencent Games dan diterbitkan oleh Activision untuk serambi Android dan iOS.',
    isPlayed: false,
  },
  {
    id: 5,
    game: 'Paper Rock Scissors',
    video: 'https://youtu.be/XCU13mwc_R4',
    genres: [
      { id: 1, label: 'Action' },
      { id: 2, label: 'Arcade' },
    ],
    description:
      'Di game ini Anda akan melawan computer. Ada 3 ronde pada game ini. Anda harus memilih batu / gunting / kertas di setiap rondenya. Hasil game akan ditentukan saat semua ronde telah selesai. ',
    isPlayed: false,
  },
]

export default function getAllGames() {
  return games
}

export function getSelectedGames(id) {
  return games.find((game) => game.id === id)
}

export function getAllGamesId() {
  const games = getAllGames()

  return games.map((game) => {
    return {
      params: {
        id: game.id.toString(),
      },
    }
  })
}
