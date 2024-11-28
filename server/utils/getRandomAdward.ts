export const LIMIT = {
  FROM: 0,
  TO: 100,
};

export const getRandomAdward = (
  adwardCards: Array<{
    id: number;
    chance: number;
    dungeonId: number;
    thingId: number;
  }>
) => {
  const randomNumber = randomIntFromInterval(LIMIT.FROM, LIMIT.TO);
  const filteredItem = adwardCards.filter(
    (adward) => adward.chance / 2 >= randomNumber
  );

  if (filteredItem.length > 1) {
    const currentAdward = filteredItem.reduce((min, adward) =>
      adward.chance < min.chance ? adward : min
    );
    return currentAdward;
  } else {
    return { ...filteredItem[0] };
  }
};

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
