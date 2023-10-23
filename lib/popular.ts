import { IAnimeResult } from "@/types";

interface popularProps {
  success: boolean;
  results: IAnimeResult[];
}

export const popular: popularProps = {
  success: true,
  results: [
    {
      id: "shingeki-no-kyojin",
      malId: 16498,
      title: {
        romaji: "Shingeki no Kyojin",
        english: "Attack on Titan",
        native: "進撃の巨人",
        userPreferred: "Shingeki no Kyojin",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
      trailer: {
        id: "luYOt2-c2TI",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/luYOt2-c2TI/hqdefault.jpg",
      },
      description:
        "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers)",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
      rating: 84,
      releaseDate: 2013,
      color: "#e4a15d",
      genres: ["Action", "Drama", "Fantasy", "Mystery"],
      totalEpisodes: 25,
      duration: 24,
      type: "TV",
    },
    {
      id: "kimetsu-no-yaiba",
      malId: 38000,
      title: {
        romaji: "Kimetsu no Yaiba",
        english: "Demon Slayer: Kimetsu no Yaiba",
        native: "鬼滅の刃",
        userPreferred: "Kimetsu no Yaiba",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
      trailer: {
        id: "6vMuWuWlW4I",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/6vMuWuWlW4I/hqdefault.jpg",
      },
      description:
        "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
      rating: 83,
      releaseDate: 2019,
      color: "#4B4A95",
      genres: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"],
      totalEpisodes: 26,
      duration: 24,
      type: "TV",
    },
    {
      id: "death-note",
      malId: 1535,
      title: {
        romaji: "DEATH NOTE",
        english: "Death Note",
        native: "DEATH NOTE",
        userPreferred: "DEATH NOTE",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",
      trailer: {
        id: "NlJZ-YgAt-c",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/NlJZ-YgAt-c/hqdefault.jpg",
      },
      description:
        "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n<br>\nThe consequences of Light’s actions will set the world ablaze.<br>\n<br>\n(Source: Viz Media)",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
      rating: 84,
      releaseDate: 2006,
      genres: ["Mystery", "Psychological", "Supernatural", "Thriller"],
      totalEpisodes: 37,
      duration: 23,
      type: "TV",
    },
    {
      id: "boku-no-hero-academia",
      malId: 31964,
      title: {
        romaji: "Boku no Hero Academia",
        english: "My Hero Academia",
        native: "僕のヒーローアカデミア",
        userPreferred: "Boku no Hero Academia",
      },
      logo: "/mha.png",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-DUKLgasrgeNO.jpg",
      trailer: {
        id: "AhqVltWDqFA",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/AhqVltWDqFA/hqdefault.jpg",
      },
      description:
        "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n\n(Source: Viz Media)",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
      rating: 77,
      releaseDate: 2016,
      color: "#e4c935",
      genres: ["Action", "Adventure", "Comedy"],
      totalEpisodes: 13,
      duration: 24,
      type: "TV",
    },
    {
      id: "jujutsu-kaisen-tv",
      malId: 40748,
      title: {
        romaji: "Jujutsu Kaisen",
        english: "JUJUTSU KAISEN",
        native: "呪術廻戦",
        userPreferred: "Jujutsu Kaisen",
      },
      logo: "/jjk.png",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",
      trailer: {
        id: "pkKu9hLT-t8",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/pkKu9hLT-t8/hqdefault.jpg",
      },
      description:
        "A boy fights... for 'the right death.'Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
      rating: 86,
      releaseDate: 2020,
      color: "#e45d5d",
      genres: ["Action", "Drama", "Supernatural"],
      totalEpisodes: 24,
      duration: 24,
      type: "TV",
    },
    {
      id: "hunter-x-hunter-2011",
      malId: 11061,
      title: {
        romaji: "HUNTER×HUNTER (2011)",
        english: "Hunter x Hunter (2011)",
        native: "HUNTER×HUNTER (2011)",
        userPreferred: "HUNTER×HUNTER (2011)",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
      trailer: {
        id: "d6kBeJjTGnY",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/d6kBeJjTGnY/hqdefault.jpg",
      },
      description:
        "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
      rating: 89,
      releaseDate: 2011,
      color: "#f1d65d",
      genres: ["Action", "Adventure", "Fantasy"],
      totalEpisodes: 148,
      duration: 24,
      type: "TV",
    },
    {
      id: "one-punch-man",
      malId: 30276,
      title: {
        romaji: "One Punch Man",
        english: "One-Punch Man",
        native: "ワンパンマン",
        userPreferred: "One Punch Man",
      },
      logo: "/opm.webp",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-UV2tu6exrfXz.jpg",
      trailer: {
        id: "RzmFKUDOUgw",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/RzmFKUDOUgw/hqdefault.jpg",
      },
      description:
        "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n<br><br>\nThe lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n\n",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
      rating: 83,
      releaseDate: 2015,
      color: "#e4ae5d",
      genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
      totalEpisodes: 12,
      duration: 24,
      type: "TV",
    },
    {
      id: "tokyo-ghoul",
      malId: 22319,
      title: {
        romaji: "Tokyo Ghoul",
        english: "Tokyo Ghoul",
        native: "東京喰種 トーキョーグール",
        userPreferred: "Tokyo Ghoul",
      },
      logo: "/tg.png",
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
      trailer: {
        id: "XfQUjYsVBrE",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/XfQUjYsVBrE/hqdefault.jpg",
      },
      description:
        'The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious "ghouls" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n<br><br>\n(Source: Anime News Network)',
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
      rating: 75,
      releaseDate: 2014,
      color: "#35DDFF",
      genres: [
        "Action",
        "Drama",
        "Horror",
        "Mystery",
        "Psychological",
        "Supernatural",
      ],
      totalEpisodes: 12,
      duration: 24,
      type: "TV",
    },
    {
      id: "shingeki-no-kyojin-season-2",
      malId: 25777,
      title: {
        romaji: "Shingeki no Kyojin 2",
        english: "Attack on Titan Season 2",
        native: "進撃の巨人２",
        userPreferred: "Shingeki no Kyojin 2",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
      trailer: {
        id: "zLaVP8IhIuc",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/zLaVP8IhIuc/hqdefault.jpg",
      },
      description:
        "Eren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n\n(Source: Funimation)",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",
      rating: 84,
      releaseDate: 2017,
      color: "#6AA66F",
      genres: ["Action", "Drama", "Fantasy", "Mystery"],
      totalEpisodes: 12,
      duration: 25,
      type: "TV",
    },
    {
      id: "sword-art-online",
      malId: 11757,
      title: {
        romaji: "Sword Art Online",
        english: "Sword Art Online",
        native: "ソードアート・オンライン",
        userPreferred: "Sword Art Online",
      },
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg",
      trailer: {
        id: "C8Jl_-b7ju0",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/C8Jl_-b7ju0/hqdefault.jpg",
      },
      description:
        "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...",
      status: "Completed",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
      rating: 68,
      releaseDate: 2012,
      color: "#5DC0E4",
      genres: ["Action", "Adventure", "Fantasy", "Romance"],
      totalEpisodes: 25,
      duration: 23,
      type: "TV",
    },
  ],
};
