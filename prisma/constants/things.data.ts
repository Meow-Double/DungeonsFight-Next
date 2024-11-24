const url = "http://localhost:3000/uploads/things";

export const ThingItems = [
  //ghost_ship
  {
    image: `${url}/ghost_ship/map.png`,
    title: "Карта сокровищ",
    desc: "",
    type: "average",
    payment: 64,
  },
  {
    image: `${url}/ghost_ship/kettle.png`,
    title: "Котёл с огнём",
    desc: "",
    type: "rare",
    payment: 17,
  },
  {
    image: `${url}/ghost_ship/potion.png`,
    title: "Зелье бессмертия",
    desc: "",
    type: "legendary",
    payment: 461,
  },
  //heavenly_skies
  {
    image: `${url}/heavenly_skies/sword.png`,
    title: "Мечь небес",
    desc: "",
    type: "epic",
    payment: 143,
  },
  {
    image: `${url}/heavenly_skies/water.png`,
    title: "Святая вода",
    desc: "",
    type: "rare",
    payment: 39,
  },
  //pirate_square
  {
    image: `${url}/pirate_square/beer.png`,
    title: "Чаша пива",
    desc: "",
    type: "ordinary",
    payment: 4,
  },
  {
    image: `${url}/pirate_square/chest.png`,
    title: "Сундук с сокровищами",
    desc: "",
    type: "average",
    payment: 71,
  },
  {
    image: `${url}/pirate_square/meat.png`,
    title: "Жаренное мясо",
    desc: "",
    type: "ordinary",
    payment: 3,
  },
  {
    image: `${url}/pirate_square/potion.png`,
    title: "Зелье смерти",
    desc: "",
    type: "epic",
    payment: 120,
  },
  {
    image: `${url}/pirate_square/sword.png`,
    title: "Бронзовый меч",
    desc: "",
    type: "rare",
    payment: 28,
  },
  //   viking_arena
  {
    image: `${url}/viking_arena/campfire.png`,
    title: "Костёр",
    desc: "",
    type: "rare",
    payment: 34,
  },
  {
    image: `${url}/viking_arena/hide.png`,
    title: "Шкура",
    desc: "",
    type: "ordinary",
    payment: 7,
  },
  {
    image: `${url}/viking_arena/staff.png`,
    title: "Посох мага",
    desc: "",
    type: "rare",
    payment: 40,
  },
  {
    image: `${url}/viking_arena/sword.png`,
    title: "Меч викинга",
    desc: "",
    type: "average",
    payment: 36,
  },
];

// "ordinary" | "rare" | "average" | "epic" | "legendary";

// 1- 10

// 10 - 40

// 40 - 100

// 100 - 200

// 200 - 500
