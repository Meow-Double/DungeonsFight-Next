export const getISO = (seconds?: number) => {
  const date = seconds ? new Date(seconds * 1000) : new Date();

  return date.toISOString();
};
