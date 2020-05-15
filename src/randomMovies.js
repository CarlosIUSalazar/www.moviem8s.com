let randomMovies = [
    {
      pics: [
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      ],
      name: "Avengers",
      year: 2019,
      rating: "R",
      plot:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
      pics: [
        "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      ],
      name: "Terminator",
      year: 1991,
      rating: "R",
      plot:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg."
    },
    {
      pics: [
        "https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      ],
      name: "Robocop",
      year: 1987,
      rating: "R",
      plot: "In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories."
    },
    {
      pics: [
        "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg",
      ],
      name: "Ghostbusters",
      year: 1984,
      rating: "PG-13",
      plot: "Three former parapsychology professors set up shop as a unique ghost removal service."
    },
    {
      pics: [
        "https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTkwNzExMjk0MF5BMl5BanBnXkFtZTcwOTUzNDcyMw@@._V1_SX300.jpg"
      ],
      name: "Legally Blonde",
      year: 2001,
      rating: "PG",
      plot:
        "Elle Woods (Reese Witherspoon), a fashionable sorority queen is dumped by her boyfriend. She decides to follow him to law school, while she is there, she figures out that there is more to her than just looks.."
    },
    {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTQ5ODI5NTMzN15BMl5BanBnXkFtZTcwNzY4MTYxMg@@._V1_SX300.jpg",
        ],
        name: "Friday the 13th",
        year: 2009,
        rating: "R",
        plot: "A group of young adults discover a boarded up Camp Crystal Lake, where they soon encounter Jason Voorhees and his deadly intentions."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        ],
        name: "Hobbs & Shaw - Fast & Furious",
        year: 2019,
        rating: "PG-13",
        plot: "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
        ],
        name: "Rambo",
        year: 2008,
        rating: "R",
        plot: "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        ],
        name: "The Shawshank Redemption",
        year: 1994,
        rating: "R",
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        ],
        name: "The Dark Knight",
        year: 2008,
        rating: "PG-13",
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ],
        name: "Pulp Fiction",
        year: 1994,
        rating: "R",
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ],
        name: "The Fight Club",
        year: 1999,
        rating: "R",
        plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        ],
        name: "Forrest Gump",
        year: 1994,
        rating: "PG-13",
        plot: "The presidencies of Kennedy, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        ],
        name: "Inception",
        year: 1990,
        rating: "PG-13",
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ],
        name: "Star Wars: Episode IV",
        year: 1977,
        rating: "PG",
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ],
        name: "The Matrix",
        year: 1999,
        rating: "R",
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMjI1ZjhmMzktMDZhMy00MDhjLTk3YjAtMTNlZTA5MDI3NzQ3XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_SX300.jpg",
        ],
        name: "Seven Samurai",
        year: 1956,
        rating: "Not Rated",
        plot: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTU0NzY0MTY5OF5BMl5BanBnXkFtZTcwODY3MDEwMg@@._V1_SX300.jpg",
        ],
        name: "Seven Pounds",
        year: 2008,
        rating: "PG-13",
        plot: "A man with a fateful secret embarks on an extraordinary journey of redemption by forever changing the lives of seven strangers."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        ],
        name: "Saving Private Ryan",
        year: 1998,
        rating: "R",
        plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ],
        name: "Spirited Away",
        year: 2003,
        rating: "PG",
        plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ],
        name: "Interstellar",
        year: 2014,
        rating: "PG-13",
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
        ],
        name: "The Lion King",
        year: 1994,
        rating: "G",
        plot: "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        ],
        name: "Back to the Future",
        year: 1985,
        rating: "PG",
        plot: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        ],
        name: "Joker",
        year: 2019,
        rating: "R",
        plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ],
        name: "Alien",
        year: 1979,
        rating: "R",
        plot: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun."
      },
    //   {
    //     pics: [
    //       "",
    //     ],
    //     name: "",
    //     year: XXXX,
    //     rating: "",
    //     plot: ""
    //   },

  ];
  
export default randomMovies;
