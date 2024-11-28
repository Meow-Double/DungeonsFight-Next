const previewUrl = "http://localhost:3000/uploads/dungeons/preview";
const banerUrl = "http://localhost:3000/uploads/dungeons/baner";

export const Dungeons = [
  //ghost_ship
  {
    preview: `${previewUrl}/ghost_ship.jpg`,
    baner: `${banerUrl}/ghost_ship.jpg`,
    difficulty: 3,
    title: "Корабль - призрак",
    type: "lair",
    openTime: "18:00-19:00",
    desc: "Это зловещее и таинственное логово, которое вызывает дрожь у всех, кто отваживается ступить на его покосившийся палубы. Этот корабль, покрытый мраком и загадками, дрейфует по безбрежным водам, скрытым от глаз обычных людей. Палубы корабля скрипят и стонут под ногами, а паруса, разорванные и изъеденные временем, колышутся на ветру, издавая зловещие шорохи. Здесь нет света, кроме тусклого, мерцающего свечения, исходящего от призрачных фигур, которые когда-то были членами экипажа этого судна. Легенда гласит, что этот корабль был проклят давным-давно, когда капитан и его команда совершили ужасное преступление. Теперь они обречены на вечное скитание по морям, охраняя сокровища и секреты, спрятанные в трюме корабля. Каждый уголок здесь наполнен призраками прошлого, которые будут следить за каждым вашим шагом.",
    // dungeonAdward: [1, 2, 3],
  },
  //   heavenly_skies
  {
    preview: `${previewUrl}/heavenly_skies.jpg`,
    baner: `${banerUrl}/heavenly_skies.jpg`,
    difficulty: 2,
    title: "Райские небеса",
    type: "dungeon",
    openTime: "4:00-8:00",
    desc: "Данж, наполненный светом и волшебством, который создает ощущение покоя и вечного блаженства. Это место, где каждый шаг ведет вас к новым удивительным открытиям и где время, кажется, застыло в состоянии абсолютного мира.  Данж напоминает сказочный сад, где повсюду рассыпаны мягкие облака, по которым можно ходить, словно по пушистой дорожке. Великие арки из сверкающего мрамора возвышаются над головой, поддерживая хрустальные купола, сквозь которые проникает нежное сияние. Птицы с радужными крыльями поют мелодичные песни, наполняя воздух гармонией. На каждом шагу вы встречаете ангелов — стражей этого благословенного места. Они приветствуют вас добрыми улыбками и помогают на пути, предоставляя подсказки и защиту от скрытых опасностей. Дорога усажена волшебными цветами, каждый из которых обладает целебными свойствами.",
    // dungeonAdward: [4, 5],
  },
  //   pirate_square
  {
    preview: `${previewUrl}/pirate_square.jpg`,
    baner: `${banerUrl}/pirate_square.jpg`,
    difficulty: 4,
    title: "Пиратский сквер",
    type: "cave",
    openTime: "12:00-17:00",
    desc: "Зловещее и мистическое подземелье, пропитанное атмосферой пиратской романтики и опасностей, которое манит отважных авантюристов своими сокровищами и тайнами. Сквер находится на заброшенном острове, окруженном бурными морями и коварными рифами. Уже с подхода к острову ощущается запах соли и морских водорослей, а штормовые ветра свистят в старых оснастках полусгнивших кораблей, разбросанных вдоль берега. Войдя в подземелье, вы попадаете в мрачный лабиринт, освещенный лишь тусклыми факелами и слабым светом лунных лучей, пробивающихся сквозь трещины в потолке. Здесь, среди коридоров и залов, можно найти остатки старинных пиратских укрытий, наполовину сгнившие сундуки и разбросанные золотые монеты. В воздухе витает запах сырости и затхлости, смешанный с ароматом старого рома.",
    // dungeonAdward: [6, 7, 8, 9, 10],
  },
  // viking_arena
  {
    preview: `${previewUrl}/viking_arena.jpg`,
    baner: `${banerUrl}/viking_arena.jpg`,
    difficulty: 2,
    title: "Арена викингов",
    type: "arena",
    openTime: "6:00-12:00",
    desc: "Арена викингов – это величественная арена, где только самые храбрые воины осмеливаются испытать свою силу и отвагу. Расположенная глубоко в сердце заснеженных гор, арена окружена ледяными стенами и древними рунными камнями, хранящими загадочные тайны предков. Здесь воины встречаются лицом к лицу в жестоких битвах, где каждое движение может стать последним. На арене царит суровая атмосфера, насыщенная звуками яростных сражений, эхо которых разносится по всей округе. Докажите свою доблесть и заслужите уважение богов, взирающих с небес. Победитель получит несметные богатства и легендарные артефакты, о которых слагают легенды викингов. Но будь осторожен, ведь только истинные герои смогут выйти живыми из этой арены, оставив след в истории.",
    // dungeonAdward: [11, 12, 13, 14],
  },
  //   wisdom_tree
  {
    preview: `${previewUrl}/wisdom_tree.jpg`,
    baner: `${banerUrl}/wisdom_tree.jpg`,
    difficulty: 4,
    title: "Дерево мудрости",
    type: "cave",
    openTime: "16:00-20:00",
    desc: "Волшебное подземелье, пропитанное древними тайнами и магией. Оно прячется в глубине древнего леса, где величественные деревья создают густую крону, преграждающую путь солнечным лучам. Это место, где время кажется застывшим, а воздух насыщен ароматами лесных трав и цветов. В центре подземелья возвышается могучее дерево, чей ствол покрыт древними рунами и символами. Его ветви тянутся к небу, и каждая ветвь переплетается с магическими светлячками, которые излучают мягкий свет, озаряющий окрестности. Листья этого дерева переливаются золотом и серебром, создавая ощущение бесконечной мудрости и покоя. На его ветвях можно увидеть старинные свитки и книги, которые содержат бесценные знания и секреты прошлого. Ветви дерева словно шепчут на разных языках, открывая тайны тем, кто способен их услышать. Ствол дерева испещрен резными изображениями, которые рассказывают историю мира и его древних героев.",
  },
  //   garden_eden
  {
    preview: `${previewUrl}/garden_eden.jpg`,
    baner: `${banerUrl}/garden_eden.jpg`,
    difficulty: 2,
    title: "Райский сад",
    type: "terrain",
    openTime: "8:00-14:30",
    desc: "Волшебная и мистическая территория. Здесь царит атмосфера вечной весны и покоя, где каждый шаг напоминает о благодати и гармонии. Пути сюда укрыты густым ковром изумрудной травы. Воздух напоен сладким ароматом цветов и свежести, создавая впечатление, что вы находитесь в самом сердце оазиса. В центре этого райского уголка бьет хрустальный фонтан, окруженный радужными бабочками и колибри, которые порхают среди лепестков. Деревья с густыми кронами предлагают прохладную тень, а под их ветвями можно найти удивительные плоды, способные исцелять раны и восстанавливать силы. Однако этот сад не так прост, как кажется на первый взгляд. Он охраняется древними духами природы, которые следят за тем, чтобы никто не нарушал хрупкое равновесие этого места. Путники должны быть готовы к испытаниям, требующим не только физической силы, но и духовной чистоты.",
  },
  //   drowning_basement
  {
    preview: `${previewUrl}/drowning_basement.jpg`,
    baner: `${banerUrl}/drowning_basement.jpg`,
    difficulty: 4,
    title: "Подвал утопленика",
    type: "dungeon",
    openTime: "21:00-00:00",
    desc: "Зловещее и мрачное подземелье, полное темных секретов и угрожающих ловушек. Расположенное глубоко под старым заброшенным замком, подвал навевает ужас на каждого, кто осмеливается спуститься в его мрачные глубины. Стены подвала обросли мхом и покрыты ледяным инеем, а воздух напоен холодной влажностью и затхлым запахом стоячей воды. Пол здесь скользкий и неустойчивый, из-за постоянных протечек и темных луж, таящихся в тени. Рассказывают, что в этих мрачных коридорах обитает дух утопленика — злобного и беспокойного призрака, который был заточен здесь много столетий назад. Его стонущие вопли эхом разносятся по подземелью, добавляя элемент страха к и без того тревожной атмосфере.",
  },
  //   kraken_grounds
  {
    preview: `${previewUrl}/kraken_grounds.jpg`,
    baner: `${banerUrl}/kraken_grounds.jpg`,
    difficulty: 3,
    title: "Угодья кракена",
    type: "lair",
    openTime: "19:00-22:00",
    desc: "Мрачное и ужасающие логово, сокрытое глубоко под водной гладью, где скрывается легендарное морское чудовище. Это место окутано тайнами и опасностями, которые подстерегают каждого, кто осмелится ступить на его территорию. Логово состоит из затопленных коридоров и больших пещер, где вода непрерывно струится по стенам, создавая пугающие звуки эха. Слабое свечение странных биолюминесцентных существ освещает путь, превращая тьму в ужасающие сцены. В воздухе витает запах соли и гниения, напоминающий о многих тех, кто не сумел выбраться живым. Здесь можно встретить останки древних кораблей, потерянных в сражениях с огромным кракеном. Их скелеты разбросаны по логову, служа молчаливым напоминанием о безжалостной силе этого чудовища. Воды Угодья кишат морскими существами, которые охотятся за непрошенными гостями.",
  },
  //   house_worship
  {
    preview: `${previewUrl}/house_worship.jpg`,
    baner: `${banerUrl}/house_worship.jpg`,
    difficulty: 3,
    title: "Дом культа",
    type: "dungeon",
    openTime: "0:00-2:00",
    desc: "Дом культа — это зловещее и таинственное подземелье, где тьма и мрак переплетаются с ритуальными символами и древними магическими практиками. В этом месте каждый уголок пропитан зловещими тайнами и жуткими ритуалами, проводимыми темным культом, поклоняющимся забытым богам. Вход в подземелье скрыт за массивной деревянной дверью, покрытой старинными резными символами и рунами, которые отпугивают нежеланных гостей. Внутри царит полумрак, освещенный лишь мерцающими факелами, чья тусклая светопередача отбрасывает причудливые тени на стены. Стены подземелья украшены странными картинами и барельефами, изображающими сцены жертвоприношений и мистических обрядов. На алтарях покоятся жуткие артефакты, которыми культисты пользуются для своих темных ритуалов. Воздух пропитан запахом древних трав и курений, используемых для призыва потусторонних сил.",
  },
];

// "dungeon" | "cave" | "arena" | "lair" | "terrain";
