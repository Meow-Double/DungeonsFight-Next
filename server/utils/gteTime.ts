export const getTime = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const allData = `${day}.${month}.${year}`;
  const allTime = `${hours}:${minutes}:${seconds}`;
  const timeToSecond = hours * minutes * seconds;
  const timestampInSeconds = Math.floor(date.getTime() / 1000);
  return {
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    allData,
    allTime,
    timeToSecond,
    timestampInSeconds,
  };
};
