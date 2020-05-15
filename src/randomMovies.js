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
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        ],
        name: "Parasite",
        year: 2019,
        rating: "R",
        plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
        ],
        name: "The Green Mile",
        year: 1999,
        rating: "R",
        plot: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ],
        name: "The Pianist",
        year: 2003,
        rating: "R",
        plot: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ],
        name: "Gladiator",
        year: 2000,
        rating: "R",
        plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
        ],
        name: "The Departed",
        year: 2006,
        rating: "R",
        plot: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
        ],
        name: "The Prestige",
        year: 2006,
        rating: "PG-13",
        plot: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ],
        name: "Whiplash",
        year: 2014,
        rating: "R",
        plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        ],
        name: "Casablanca",
        year: 1943,
        rating: "PG",
        plot: "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
        ],
        name: "Django Unchained",
        year: 2012,
        rating: "R",
        plot: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ],
        name: "Memento",
        year: 2001,
        rating: "R",
        plot: "A man with short-term memory loss attempts to track down his wife's murderer."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        ],
        name: "The Shining",
        year: 1980,
        rating: "R",
        plot: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
        ],
        name: "Princess Mononoke",
        year: 1997,
        rating: "PG-13",
        plot: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg",
        ],
        name: "Your Name",
        year: 2017,
        rating: "PG",
        plot: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
        ],
        name: "Coco",
        year: 2017,
        rating: "PG",
        plot: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ],
        name: "American Beauty",
        year: 1999,
        rating: "R",
        plot: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ],
        name: "Braveheart",
        year: 1995,
        rating: "R",
        plot: "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
        ],
        name: "Toy Story",
        year: 1995,
        rating: "G",
        plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        ],
        name: "Citizen Kane",
        year: 1941,
        rating: "PG",
        plot: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNDM2MzMwMzcxNF5BMl5BanBnXkFtZTcwNTczMDk3OA@@._V1_SX300.jpg",
        ],
        name: "The Hunt",
        year: 2013,
        rating: "R",
        plot: "A teacher lives a lonely life, all the while struggling over his son's custody. "
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        ],
        name: "Scarface",
        year: 1983,
        rating: "R",
        plot: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
        ],
        name: "Toy Story 3",
        year: 2010,
        rating: "G",
        plot: "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        ],
        name: "Amelie",
        year: 2002,
        rating: "R",
        plot: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        ],
        name: "The Bourne Identity",
        year: 2002,
        rating: "PG-13",
        plot: "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTM4NzQ0OTYyOF5BMl5BanBnXkFtZTcwMDkyNjQyMg@@._V1_SX300.jpg",
        ],
        name: "Taken",
        year: 2009,
        rating: "PG-13",
        plot: "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Up",
        year: 2009,
        rating: "PG",
        plot: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway"
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Die Hard",
        year: 1988,
        rating: "R",
        plot: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY268_CR9,0,182,268_AL_.jpg",
        ],
        name: "Batman Begins",
        year: 2005,
        rating: "PG-13",
        plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_UY268_CR0,0,182,268_AL_.jpg",
        ],
        name: "Downfall",
        year: 2004,
        rating: "R",
        plot: "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Howl's Moving Castle",
        year: 2004,
        rating: "PG",
        plot: "When an unconfident young woman is cursed with an old body by a spiteful witch."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "A Beautiful Mind",
        year: 2001,
        rating: "PD-13",
        plot: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg",
        ],
        name: "My Neighbour Totoro",
        year: 1988,
        rating: "PG",
        plot: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "V for Vendetta",
        year: 2005,
        rating: "R",
        plot: "In a future British tyranny, a shadowy freedom fighter, known only by the alias of 'V', plots to overthrow it with the help of a young woman."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Inside Out",
        year: 2015,
        rating: "PG",
        plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Warrior",
        year: 2011,
        rating: "R",
        plot: "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Shutter Island",
        year: 2010,
        rating: "R",
        plot: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Jurassic Park",
        year: 1993,
        rating: "PG-13",
        plot: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Blade Runner",
        year: 1982,
        rating: "R",
        plot: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Finding Nemo",
        year: 2003,
        rating: "PG",
        plot: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "The Truman Show",
        year: 1998,
        rating: "PG-13",
        plot: "An insurance salesman discovers his whole life is actually a reality TV show."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Kill Bill",
        year: 2003,
        rating: "R",
        plot: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY268_CR4,0,182,268_AL_.jpg",
        ],
        name: "Wild Tales",
        year: 2014,
        rating: "R",
        plot: "Six short stories that explore the extremities of human behavior involving people in distress."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        ],
        name: "Gone Girl",
        year: 2014,
        rating: "R",
        plot: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_.jpg",
        ],
        name: "Into the Wild",
        year: 2007,
        rating: "PG-13",
        plot: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions to live in the wilderness."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SY1000_CR0,0,678,1000_AL_.jpg",
        ],
        name: "Million Dollar Baby",
        year: 2004,
        rating: "R",
        plot: "A determined woman works with a hardened boxing trainer to become a professional."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        ],
        name: "Logan",
        year: 2017,
        rating: "R",
        plot: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMWJhOTg5MWQtYTJjMi00YmFkLTg4ODgtYmU2YWVhODQ4ZDM3XkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg",
        ],
        name: "Amores Perros",
        year: 2000,
        rating: "R",
        plot: "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        ],
        name: "Rocky",
        year: 1976,
        rating: "R",
        plot: "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_.jpg",
        ],
        name: "Monsters Inc.",
        year: 2001,
        rating: "PG",
        plot: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTM5OTMyMjIxOV5BMl5BanBnXkFtZTcwNzU4MjIwNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ],
        name: "The Help",
        year: 2011,
        rating: "PG-13",
        plot: "An aspiring author during the civil rights movement of the 1960s decides to write a book."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg",
        ],
        name: "Aladdin",
        year: 1992,
        rating: "PG",
        plot: "A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SY1000_CR0,0,689,1000_AL_.jpg",
        ],
        name: "PK",
        year: 2014,
        rating: "PG-13",
        plot: "An alien on Earth loses the only device he can use to communicate with his spaceship."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
        ],
        name: "The Godfather",
        year: 1972,
        rating: "R",
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg",
        ],
        name: "Knives Out",
        year: 2019,
        rating: "PG-13",
        plot: "A detective investigates the death of a patriarch of an eccentric, combative family."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX667_AL_.jpg",
        ],
        name: "Jojo Rabbit",
        year: 2019,
        rating: "PG-13",
        plot: "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg",
        ],
        name: "The Irishman",
        year: 2019,
        rating: "R",
        plot: "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950-70s."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZWEyM2U5ZTItMTFiYy00NjZlLWFjYzItNzBiMjkxNDRhNTUyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        ],
        name: "Upload",
        year: 2020,
        rating: "R",
        plot: "A man is able to choose his own afterlife after his untimely death."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BYzFjNzIxMmEtMzY5NS00YTgzLTkwYWEtN2FjMmY0NmNkZWY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        ],
        name: "Face/Off",
        year: 1997,
        rating: "R",
        plot: "In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOTUxNmZiOWQtOWFmMy00YTU1LTkzMGItOTRhZDA0ZDAwMDE5XkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        ],
        name: "Hard Target",
        year: 1993,
        rating: "R",
        plot: "A woman hires a drifter as her guide through New Orleans in search of her father, who has gone missing"
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        ],
        name: "Mission Impossible 2",
        year: 2000,
        rating: "PG-13",
        plot: "IMF agent Ethan Hunt is sent to Sydney to find and destroy a genetically modified disease called 'Chimera'"
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTY0NzQ4MDU0NV5BMl5BanBnXkFtZTcwMzA2NzQ2MQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ],
        name: "Get Smart",
        year: 2008,
        rating: "PG",
        plot: "Maxwell Smart, a highly intellectual but bumbling spy working for the CONTROL agency, is tasked with preventing a terrorist attack from rival spy agency KAOS."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BODgwMjM2ODE4M15BMl5BanBnXkFtZTcwMTU2MDcyMw@@._V1_.jpg",
        ],
        name: "Date Night",
        year: 2010,
        rating: "PG-13",
        plot: "In New York City, a case of mistaken identity turns a bored married couple's attempt at a glamorous and romantic evening into something more thrilling and dangerous."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_.jpg",
        ],
        name: "The Other Guys",
        year: 2010,
        rating: "PG-13",
        plot: "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, whom they idolize, only things don't quite go as planned."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTY0NjI3MzM2Nl5BMl5BanBnXkFtZTcwNDgxNjA5Nw@@._V1_.jpg",
        ],
        name: "The Campaign",
        year: 2012,
        rating: "PG-13",
        plot: "An incumbent Representative embroiled in personal scandal faces a no-holds-barred challenge from a naive newcomer funded by two unscrupulous billionaire lobbyist brothers."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        ],
        name: "Skyfall",
        year: 2012,
        rating: "R",
        plot: "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY1000_SX675_AL_.jpg",
        ],
        name: "21 Jump Street",
        year: 2012,
        rating: "PG-13",
        plot: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg",
        ],
        name: "Life of Pi",
        year: 2012,
        rating: "PG",
        plot: "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ],
        name: "Brave",
        year: 2012,
        rating: "PG",
        plot: "Determined to make her own path in life, Princess Merida (Kelly Macdonald) defies a custom that brings chaos to her kingdom."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ],
        name: "Ford V Ferrari",
        year: 2019,
        rating: "PG-13",
        plot: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        ],
        name: "Scary Movie",
        year: 2000,
        rating: "R",
        plot: "A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ],
        name: "Epic Movie",
        year: 2007,
        rating: "R",
        plot: "A spoof on previous years' epic movies."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        ],
        name: "Sonic the Hedgehog",
        year: 2020,
        rating: "PG",
        plot: "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SY1000_CR0,0,654,1000_AL_.jpg",
        ],
        name: "The Simpsons Movie",
        year: 2007,
        rating: "PG-13",
        plot: "After Homer deliberately pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the family are declared fugitives."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        ],
        name: "X-Men",
        year: 2000,
        rating: "PG-13",
        plot: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_.jpg",
        ],
        name: "Mamma Mia!",
        year: 2008,
        rating: "PG",
        plot: "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BMTg4MzMzMTY0OF5BMl5BanBnXkFtZTYwNzM3MTg2._V1_.jpg",
        ],
        name: "Scooby-Doo",
        year: 2002,
        rating: "PG",
        plot: "After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on."
      },
      {
        pics: [
          "https://m.media-amazon.com/images/M/MV5BOTgwMmU0YzktOGNhNi00MDcyLTg1OGEtZGQwM2RlMTAyYzhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        ],
        name: "Jackass the Movie",
        year: 2002,
        rating: "R",
        plot: "Johnny Knoxville and his band of maniacs perform a variety of stunts and gross-out gags on the big screen for the first time."
      },
      
  ];
  
export default randomMovies;
