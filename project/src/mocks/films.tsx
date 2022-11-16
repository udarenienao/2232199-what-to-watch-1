import {Film} from '../types/film';

export const films: Film[] = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    posterUrl: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundUrl: 'img/bg-the-grand-budapest-hotel.jpg',
    genre: 'Drama',
    releaseDate: 2014,
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe and other'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge' +
      ' Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the' +
      ' sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously,' +
      ' Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:25',
    reviews: [{
      id: 1,
      rating: 7.6,
      author: 'Paula Fleri-Soler',
      date: 'December 20, 2016',
      text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'
    }, {
      id: 2,
      rating: 7.2,
      author: 'Matthew Lickona',
      date: 'December 20, 2016',
      text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'
    }
    ]
  },
  {
    id: 2,
    title: 'Avatar',
    posterUrl: 'https://i.pinimg.com/originals/40/3e/df/403edf0b1c90a4731d26340a27d9749c.jpg',
    backgroundUrl: 'https://i.pinimg.com/originals/1b/7d/ef/1b7deff59132b200475e8aeb27c7b5a4.jpg',
    genre: 'Sci-Fi',
    releaseDate: 2009,
    rating: 8.9,
    scoresCount: 240,
    director: 'James Cameron',
    starring: ['Sam Worthington', 'Zoe Saldana', 'Stephen Lang', 'Michelle Rodriguez', 'Sigourney Weaver'],
    description: 'When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place ' +
      'in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker ' +
      'Selfridge\'s intentions of driving off the native humanoid "Na\'vi" in order to mine for the precious ' +
      'material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, ' +
      'Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit ' +
      'spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na\'vi people ' +
      'with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in ' +
      'love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination ' +
      'tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/dog.mp4',
    timeValue: '03:31',
    reviews: []
  },
  {
    id: 3,
    title: 'Interstellar',
    posterUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/76160f72503261.5be9d8d9b2dcc.jpg',
    backgroundUrl: 'https://rabkor.ru/wp-content/uploads/2014/12/интсверху.jpeg',
    genre: 'Drama',
    releaseDate: 2014,
    rating: 8.6,
    scoresCount: 635,
    director: 'Christopher Nolan',
    starring: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain',
      'Bill Irwin', 'Ellen Burstyn', 'Michael Caine'],
    description: 'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way ' +
      'to ensure mankind\'s survival: Interstellar travel. A newly discovered wormhole in the far reaches of our ' +
      'solar system allows a team of astronauts to go where no man has gone before, a planet that may have the ' +
      'right environment to sustain human life.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:25',
    reviews: []
  },
  {
    id: 4,
    title: 'Intouchables',
    posterUrl: 'https://cdn1.ozone.ru/s3/multimedia-p/6190787713.jpg',
    backgroundUrl: 'https://ronakparmar.com/wp-content/uploads/2020/04/the-intouchables.png',
    genre: 'Comedies',
    releaseDate: 2011,
    rating: 8.5,
    scoresCount: 850,
    director: 'Olivier Nakache',
    starring: ['François Cluzet', 'Omar Sy'],
    description: 'In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is ' +
      'interviewing candidates for the position of his carer, with his red-haired secretary Magalie. ' +
      'Out of the blue, Driss cuts the line of candidates and brings a document from the Social Security and ' +
      'asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment ' +
      'benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping ' +
      'him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and ' +
      'moves to the mansion, changing the boring life of Phillipe and his employees.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:18',
    reviews: []
  },
  {
    id: 5,
    title: 'Avengers: Infinity War',
    posterUrl: 'https://cdn.vox-cdn.com/thumbor/a1y3boCAz8AQE6s2dOK_BGAhXDQ=/0x0:864x1080/1200x0/filters:focal(0x0:864x1080):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10438967/avengers_iw_poster.jpg',
    backgroundUrl: 'https://www.wallmesh.com/wp-content/uploads/2018/04/avengers-infinity-war-all-superhero-villain-poster-fan-artwork-1920x1080.jpg',
    genre: 'Sci-Fi',
    releaseDate: 2018,
    rating: 8.4,
    scoresCount: 1100,
    director: 'Anthony Russo',
    starring: ['Robert Downey Jr.',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
      'Scarlett Johansson',
      'Benedict Cumberbatch',
      'Don Cheadle',
      'Tom Holland'],
    description: 'As the Avengers and their allies have continued to protect the world from threats ' +
      'too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. ' +
      'A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable ' +
      'power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought ' +
      'for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:24',
    reviews: []
  },
  {
    id: 6,
    title: 'The Goldfinch',
    posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/91An4B325BL.jpg',
    backgroundUrl: 'https://www.kinonews.ru/insimgs/2019/shotimg/shotimg88295_8.jpg',
    genre: 'Drama',
    releaseDate: 2019,
    rating: 6.3,
    scoresCount: 230,
    director: 'John Crowley',
    starring: [
      'Ansel Elgort',
      'Oakes Fegley',
      'Aneurin Barnard',
      'Finn Wolfhard',
      'Sarah Paulson',
      'Luke Wilson',
      'Jeffrey Wright',
      'Nicole Kidman'],
    description: 'A boy in New York is taken in by a wealthy family after his mother is killed in a bombing ' +
      'at the Metropolitan Museum of Art. In a rush of panic, he steals \'The Goldfinch\', a painting that ' +
      'eventually draws him into a world of crime.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:20',
    reviews: []
  },
  {
    id: 7,
    title: 'Jurassic Park',
    posterUrl: 'https://www.film.ru/sites/default/files/movies/posters/jurassic-park-unused-poster.jpg',
    backgroundUrl: 'https://www.film.ru/sites/default/files/images/Sam%20Neill%20in%20Jurassic%20Park%20III%20(2001).jpg',
    genre: 'Sci-Fi',
    releaseDate: 1993,
    rating: 8.2,
    scoresCount: 981,
    director: 'Steven Spielberg',
    starring: [
      'Sam Neill',
      'Laura Dern',
      'Jeff Goldblum',
      'Bob Peck',
      'Richard Attenborough'],
    description: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central ' +
      'America is tasked with protecting a couple of kids after a power failure causes the park\'s cloned ' +
      'dinosaurs to run loose.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '3:27',
    reviews: []
  },
  {
    id: 8,
    title: 'Back to the Future',
    posterUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7c138730698845.562f39291400d.jpg',
    backgroundUrl: 'https://wallpapercave.com/wp/wp10597567.jpg',
    genre: 'Sci-Fi',
    releaseDate: 1985,
    rating: 8.5,
    scoresCount: 1200,
    director: 'Robert Zemeckis',
    starring: [
      'Michael J. Fox',
      'Christopher Lloyd',
      'Lea Thompson',
      'Crispin Glover'],
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the ' +
      'past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '1:44',
    reviews: []
  },
  {
    id: 9,
    title: 'The Grand Budapest Hotel',
    posterUrl: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundUrl: 'img/bg-the-grand-budapest-hotel.jpg',
    genre: 'Drama',
    releaseDate: 2014,
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe and other'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge' +
      ' Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.' +
      '\n' +
      'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the' +
      ' sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously,' +
      ' Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:25',
    reviews: [{
      id: 1,
      rating: 7.6,
      author: 'Paula Fleri-Soler',
      date: 'December 20, 2016',
      text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'
    }, {
      id: 2,
      rating: 7.2,
      author: 'Matthew Lickona',
      date: 'December 20, 2016',
      text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'
    }
    ]
  },
  {
    id: 10,
    title: 'Avatar',
    posterUrl: 'https://i.pinimg.com/originals/40/3e/df/403edf0b1c90a4731d26340a27d9749c.jpg',
    backgroundUrl: 'https://i.pinimg.com/originals/1b/7d/ef/1b7deff59132b200475e8aeb27c7b5a4.jpg',
    genre: 'Sci-Fi',
    releaseDate: 2009,
    rating: 8.9,
    scoresCount: 240,
    director: 'James Cameron',
    starring: ['Sam Worthington', 'Zoe Saldana', 'Stephen Lang', 'Michelle Rodriguez', 'Sigourney Weaver'],
    description: 'When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place ' +
      'in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker ' +
      'Selfridge\'s intentions of driving off the native humanoid "Na\'vi" in order to mine for the precious ' +
      'material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, ' +
      'Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit ' +
      'spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na\'vi people ' +
      'with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in ' +
      'love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination ' +
      'tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/dog.mp4',
    timeValue: '03:31',
    reviews: []
  },
  {
    id: 11,
    title: 'Interstellar',
    posterUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/76160f72503261.5be9d8d9b2dcc.jpg',
    backgroundUrl: 'https://rabkor.ru/wp-content/uploads/2014/12/интсверху.jpeg',
    genre: 'Drama',
    releaseDate: 2014,
    rating: 8.6,
    scoresCount: 635,
    director: 'Christopher Nolan',
    starring: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain',
      'Bill Irwin', 'Ellen Burstyn', 'Michael Caine'],
    description: 'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way ' +
      'to ensure mankind\'s survival: Interstellar travel. A newly discovered wormhole in the far reaches of our ' +
      'solar system allows a team of astronauts to go where no man has gone before, a planet that may have the ' +
      'right environment to sustain human life.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:25',
    reviews: []
  },
  {
    id: 12,
    title: 'Intouchables',
    posterUrl: 'https://cdn1.ozone.ru/s3/multimedia-p/6190787713.jpg',
    backgroundUrl: 'https://ronakparmar.com/wp-content/uploads/2020/04/the-intouchables.png',
    genre: 'Comedies',
    releaseDate: 2011,
    rating: 8.5,
    scoresCount: 850,
    director: 'Olivier Nakache',
    starring: ['François Cluzet', 'Omar Sy'],
    description: 'In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is ' +
      'interviewing candidates for the position of his carer, with his red-haired secretary Magalie. ' +
      'Out of the blue, Driss cuts the line of candidates and brings a document from the Social Security and ' +
      'asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment ' +
      'benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping ' +
      'him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and ' +
      'moves to the mansion, changing the boring life of Phillipe and his employees.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:18',
    reviews: []
  },
  {
    id: 13,
    title: 'Avengers: Infinity War',
    posterUrl: 'https://cdn.vox-cdn.com/thumbor/a1y3boCAz8AQE6s2dOK_BGAhXDQ=/0x0:864x1080/1200x0/filters:focal(0x0:864x1080):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10438967/avengers_iw_poster.jpg',
    backgroundUrl: 'https://www.wallmesh.com/wp-content/uploads/2018/04/avengers-infinity-war-all-superhero-villain-poster-fan-artwork-1920x1080.jpg',
    genre: 'Sci-Fi',
    releaseDate: 2018,
    rating: 8.4,
    scoresCount: 1100,
    director: 'Anthony Russo',
    starring: ['Robert Downey Jr.',
      'Chris Hemsworth',
      'Mark Ruffalo',
      'Chris Evans',
      'Scarlett Johansson',
      'Benedict Cumberbatch',
      'Don Cheadle',
      'Tom Holland'],
    description: 'As the Avengers and their allies have continued to protect the world from threats ' +
      'too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. ' +
      'A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable ' +
      'power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought ' +
      'for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:24',
    reviews: []
  },
  {
    id: 14,
    title: 'The Goldfinch',
    posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/91An4B325BL.jpg',
    backgroundUrl: 'https://www.kinonews.ru/insimgs/2019/shotimg/shotimg88295_8.jpg',
    genre: 'Drama',
    releaseDate: 2019,
    rating: 6.3,
    scoresCount: 230,
    director: 'John Crowley',
    starring: [
      'Ansel Elgort',
      'Oakes Fegley',
      'Aneurin Barnard',
      'Finn Wolfhard',
      'Sarah Paulson',
      'Luke Wilson',
      'Jeffrey Wright',
      'Nicole Kidman'],
    description: 'A boy in New York is taken in by a wealthy family after his mother is killed in a bombing ' +
      'at the Metropolitan Museum of Art. In a rush of panic, he steals \'The Goldfinch\', a painting that ' +
      'eventually draws him into a world of crime.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '2:20',
    reviews: []
  },
  {
    id: 15,
    title: 'Jurassic Park',
    posterUrl: 'https://www.film.ru/sites/default/files/movies/posters/jurassic-park-unused-poster.jpg',
    backgroundUrl: 'https://www.film.ru/sites/default/files/images/Sam%20Neill%20in%20Jurassic%20Park%20III%20(2001).jpg',
    genre: 'Sci-Fi',
    releaseDate: 1993,
    rating: 8.2,
    scoresCount: 981,
    director: 'Steven Spielberg',
    starring: [
      'Sam Neill',
      'Laura Dern',
      'Jeff Goldblum',
      'Bob Peck',
      'Richard Attenborough'],
    description: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central ' +
      'America is tasked with protecting a couple of kids after a power failure causes the park\'s cloned ' +
      'dinosaurs to run loose.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '3:27',
    reviews: []
  },
  {
    id: 16,
    title: 'Back to the Future',
    posterUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7c138730698845.562f39291400d.jpg',
    backgroundUrl: 'https://wallpapercave.com/wp/wp10597567.jpg',
    genre: 'Sci-Fi',
    releaseDate: 1985,
    rating: 8.5,
    scoresCount: 1200,
    director: 'Robert Zemeckis',
    starring: [
      'Michael J. Fox',
      'Christopher Lloyd',
      'Lea Thompson',
      'Crispin Glover'],
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the ' +
      'past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
    videoUrl: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    timeValue: '1:44',
    reviews: []
  }
];
