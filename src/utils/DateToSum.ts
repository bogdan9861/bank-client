export const DateToSum = (date: string) => {
  const months = {
    January: 1,
    Fabruary: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const day = +date.split(" ")[1];
  const month = date.split(" ")[2];
  const year = +date.split(" ")[3];

  return day + +months[month] + year
};
