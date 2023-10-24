export const formatDate = (date: number): string => {
  const dateParse = new Date(date).toDateString().split(" ");
  return `${dateParse[1]} ${dateParse[2]} ${dateParse[3]}`;
};
