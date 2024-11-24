type RareTypes = "average" | "rare" | "legendary" | "epic" | "ordinary";
type IndexedTypes = {
  [key in RareTypes | "common"]: number;
};

export const getTypesStatics = (bag: BagItems) => {
  const types: IndexedTypes = {
    ordinary: 0,
    rare: 0,
    average: 0,
    epic: 0,
    legendary: 0,
    common: 0,
  };

  bag.forEach(({ type, quantity }) => {
    if (types[type as RareTypes] !== undefined) {
      types[type as RareTypes] += quantity;
      types["common"] += quantity;
    }
  });

  return (Object.keys(types) as Array<keyof typeof types>).map((type) => ({
    rare: type,
    quantity: types[type],
  }));
};
